import { setLikeProduct, getProducts, getRecommendProducts } from "./db";
import { Product } from './models/product';

export default {
  Query: {
    productData: (_: any, { page }: { page: number }): Promise<{products: Product[], page: number, totalCount: number}> => {
      return getProducts(page);
    },
    productRecommendData: (): Promise<{products: Product[]}> => {
      return getRecommendProducts();
    },
  },
  Mutation: {
    setLikeProduct: (_parent: unknown, args: { productId: string }): Promise<{product: Product}> => {
      return setLikeProduct(args.productId);
    },
  },
};