import { createProduct, getProducts } from "./db";
import { Product, ProductInput } from './models/product';

export default {
  Query: {
    products: (): Promise<Product[]> => {
      return getProducts();
    },
  },
  Mutation: {
    addProduct: (_parent: unknown, args: { product: ProductInput }): Product => {
      return createProduct(args.product);
    },
  },
};