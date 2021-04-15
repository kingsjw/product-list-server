import { likePost, getProducts, getRecommendProducts } from "./db";
import { Product } from './models/product';

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
    likePost: (_parent: unknown, args: { productId: string }): {} => {
      return likePost(args.productId);
    },
  },
};