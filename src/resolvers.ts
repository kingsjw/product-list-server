import { createProduct, getProducts, getRecommendProducts } from "./db";
import { Product, ProductInput } from './models/product';

export default {
  Query: {
    productData: async (_: any, { page }: { page: number }): Promise<{products: Product[], page: number, totalCount: number}> => {
      return await getProducts(page);
    },
    productRecommendData: async (): Promise<{products: Product[]}> => {
      return await getRecommendProducts();
    },
  },
  Mutation: {
    addProduct: (_parent: unknown, args: { product: ProductInput }): Product => {
      return createProduct(args.product);
    },
  },
};