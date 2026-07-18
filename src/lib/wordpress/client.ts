import {
  POST_BY_SLUG_QUERY,
  POSTS_QUERY,
  PRODUCT_BY_SLUG_QUERY,
  PRODUCTS_QUERY,
} from "@/lib/wordpress/queries";
import { plainText } from "@/lib/format";
import type {
  PostResponse,
  PostsResponse,
  ProductResponse,
  ProductsResponse,
  WpPost,
  WpProduct,
} from "@/lib/wordpress/types";

type GraphQLError = {
  message: string;
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: GraphQLError[];
};

export type WordPressResult<T> = {
  data: T;
  isConfigured: boolean;
  error?: string;
};

const endpoint = process.env.WORDPRESS_GRAPHQL_URL;

function derivePostTitle(post: WpPost) {
  if (post.title?.trim()) return post.title;

  const firstHeading = post.content?.match(
    /<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i,
  )?.[1];
  const source = plainText(firstHeading || post.excerpt || "");
  const words = source.split(" ");

  if (words.length <= 16) return source || `Bài viết ${post.slug}`;
  return `${words.slice(0, 16).join(" ")}…`;
}

function normalizePost(post: WpPost): WpPost {
  return {
    ...post,
    title: derivePostTitle(post),
    excerpt: post.excerpt ?? "",
    content: post.content ?? "",
  };
}

async function graphqlRequest<T>(
  query: string,
  variables: Record<string, unknown>,
  tag: string,
): Promise<T> {
  if (!endpoint) {
    throw new Error("WORDPRESS_GRAPHQL_URL chưa được cấu hình.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60, tags: [tag] },
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) {
    throw new Error(`WordPress GraphQL phản hồi HTTP ${response.status}.`);
  }

  const payload = (await response.json()) as GraphQLResponse<T>;

  if (payload.errors?.length) {
    throw new Error(payload.errors.map(({ message }) => message).join("; "));
  }

  if (!payload.data) {
    throw new Error("WordPress GraphQL không trả về dữ liệu.");
  }

  return payload.data;
}

function failedResult<T>(fallback: T, error: unknown): WordPressResult<T> {
  return {
    data: fallback,
    isConfigured: Boolean(endpoint),
    error: error instanceof Error ? error.message : "Không thể tải dữ liệu.",
  };
}

export async function getPosts(first = 9): Promise<WordPressResult<WpPost[]>> {
  try {
    const data = await graphqlRequest<PostsResponse>(
      POSTS_QUERY,
      { first, after: null },
      "wordpress-posts",
    );
    return {
      data: data.posts.nodes.map(normalizePost),
      isConfigured: true,
    };
  } catch (error) {
    return failedResult([], error);
  }
}

export async function getPostBySlug(
  slug: string,
): Promise<WordPressResult<WpPost | null>> {
  try {
    const data = await graphqlRequest<PostResponse>(
      POST_BY_SLUG_QUERY,
      { slug },
      `wordpress-post-${slug}`,
    );
    return {
      data: data.post ? normalizePost(data.post) : null,
      isConfigured: true,
    };
  } catch (error) {
    return failedResult(null, error);
  }
}

export async function getProducts(
  first = 12,
): Promise<WordPressResult<WpProduct[]>> {
  try {
    const data = await graphqlRequest<ProductsResponse>(
      PRODUCTS_QUERY,
      { first, after: null },
      "wordpress-products",
    );
    return { data: data.products.nodes, isConfigured: true };
  } catch (error) {
    return failedResult([], error);
  }
}

export async function getProductBySlug(
  slug: string,
): Promise<WordPressResult<WpProduct | null>> {
  try {
    const data = await graphqlRequest<ProductResponse>(
      PRODUCT_BY_SLUG_QUERY,
      { slug },
      `wordpress-product-${slug}`,
    );
    return { data: data.product, isConfigured: true };
  } catch (error) {
    return failedResult(null, error);
  }
}
