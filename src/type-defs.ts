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

  type Query {
    products: [Product!]
  }

  type Mutation {
    addProduct(product: ProductInput): Product
  }
`;