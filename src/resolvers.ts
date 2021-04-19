import { getLikedProducts, setLikeProduct, getProducts, getRecommendProducts } from "./db";
import { Product } from './models/product';

export default {
  Query: {
    productData: (_: any, { page }: { page: number }): Promise<{products: Product[], page: number, totalCount: number}> => {
      return getProducts(page);
    },
    productRecommendData: (): Promise<{products: Product[]}> => {
      return getRecommendProducts();
    },
    likedProducts: (): Promise<{ status: string, likedList: string[] }> => {
      return getLikedProducts();
    },
  },
  Mutation: {
    setLikeProduct: (_parent: unknown, args: { productId: string }): Promise<{}> => {
      return setLikeProduct(args.productId);
    },
  },
};