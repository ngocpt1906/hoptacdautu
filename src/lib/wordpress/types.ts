export type WpImage = {
  sourceUrl: string;
  altText: string;
};

export type WpCategory = {
  name: string;
  slug: string;
};

export type WpPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage?: {
    node: WpImage;
  } | null;
  categories?: {
    nodes: WpCategory[];
  };
};

export type WpProduct = {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price?: string | null;
  regularPrice?: string | null;
  salePrice?: string | null;
  image?: WpImage | null;
  productCategories?: {
    nodes: WpCategory[];
  };
};

export type PageInfo = {
  hasNextPage: boolean;
  endCursor?: string | null;
};

export type PostsResponse = {
  posts: {
    nodes: WpPost[];
    pageInfo: PageInfo;
  };
};

export type PostResponse = {
  post: WpPost | null;
};

export type ProductsResponse = {
  products: {
    nodes: WpProduct[];
    pageInfo: PageInfo;
  };
};

export type ProductResponse = {
  product: WpProduct | null;
};
