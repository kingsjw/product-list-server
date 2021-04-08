import { gql } from 'apollo-server';

export default gql`
  type Product {
    id: ID!
    title: String!
    coverImage: String!
    price: Int!
  }

  input ProductInput {
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

  type Query {
    productData(page: Int): ProductResp
    productRecommendData: ProductRecommendResp
  }

  type Mutation {
    addProduct(product: ProductInput): Product
  }
`;