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

  type getLikedListResp {
    status: String
    likedList: [String!]
  }

  type setLikeProductResp {
    status: String
  }

  type Query {
    productData(page: Int): ProductResp
    productRecommendData: ProductRecommendResp
    likedProducts: getLikedListResp
  }

  type Mutation {
    setLikeProduct(productId: String): setLikeProductResp
  }
`;