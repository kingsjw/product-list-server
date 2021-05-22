import { gql } from 'apollo-server';

export default gql`
  type Product {
    id: ID!
    title: String!
    coverImage: String!
    price: Int!
    liked: Boolean!
  }

  type ProductResp {
    products: [Product!]
    page: Int
    totalCount: Int
  }

  type ProductRecommendResp {
    products: [Product!]
  }

  type setLikeProductResp {
    product: Product
  }

  type Query {
    productData(page: Int): ProductResp
    productRecommendData: ProductRecommendResp
  }

  type Mutation {
    setLikeProduct(productId: String): setLikeProductResp
  }
`;