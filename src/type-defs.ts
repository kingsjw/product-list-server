import { gql } from 'apollo-server';

export default gql`
  type Product {
    id: ID!
    title: String!
    coverImage: String!
    price: Int!
  }

  type ProductResp {
    products: [Product!]
    page: Int
    totalCount: Int
  }

  type ProductRecommendResp {
    products: [Product!]
  }

  type Status {
    code: String!
  }

  type Query {
    productData(page: Int): ProductResp
    productRecommendData: ProductRecommendResp
  }

  type Mutation {
    addCart(productId: String): Status
  }
`;