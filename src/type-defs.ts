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

  type Query {
    productData(page: Int): ProductResp
  }

  type Mutation {
    addProduct(product: ProductInput): Product
  }
`;