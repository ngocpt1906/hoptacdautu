export const POSTS_QUERY = /* GraphQL */ `
  query Posts($first: Int!, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const POST_BY_SLUG_QUERY = /* GraphQL */ `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      date
      excerpt
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`;

const PRODUCT_FIELDS = /* GraphQL */ `
  id
  databaseId
  name
  slug
  shortDescription
  description
  image {
    sourceUrl
    altText
  }
  productCategories {
    nodes {
      name
      slug
    }
  }
  ... on SimpleProduct {
    price
    regularPrice
    salePrice
  }
  ... on VariableProduct {
    price
    regularPrice
    salePrice
  }
  ... on ExternalProduct {
    price
    regularPrice
    salePrice
  }
`;

export const PRODUCTS_QUERY = /* GraphQL */ `
  query Products($first: Int!, $after: String) {
    products(first: $first, after: $after, where: { status: "publish" }) {
      nodes {
        ${PRODUCT_FIELDS}
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const PRODUCT_BY_SLUG_QUERY = /* GraphQL */ `
  query ProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      ${PRODUCT_FIELDS}
    }
  }
`;
