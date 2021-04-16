import { Product } from './models/product';

const productDummyData = require('./dummyData.json');

const productCollections = {
  products: [
    ...productDummyData.data
  ] as Product[],
  likedList: [] as string[],
};

export const getProducts = async (page: number): Promise<{products: Product[], page: number, totalCount: number}> => {
  const ITEM_COUNT = 10;
  return await new Promise((resolve) => {
    const startPage = (page - 1) * ITEM_COUNT;
    setTimeout(() => {
      const productList = productCollections.products.slice(startPage, startPage + ITEM_COUNT)
      .map(({ id, ...left }) => ({ id, ...left, liked: productCollections.likedList.indexOf(id) !== -1 }));
      resolve({
        products: productList,
        page,
        totalCount: productCollections.products.length
      });
    }, 1000);
  });
};

export const getRecommendProducts = async (): Promise<{products: Product[]}> => {
  const randomIndexList: Array<number> = [];
  while (randomIndexList.length < 4) {
    const randomIndex = Math.floor(Math.random() * productCollections.products.length);
    if (randomIndexList.indexOf(randomIndex) === -1) {
      randomIndexList.push(randomIndex);
    }
  }
  const result = {
    products: randomIndexList
    .map((index) => productCollections.products[index])
    .map(({ id, ...left }) => ({ id, ...left, liked: productCollections.likedList.indexOf(id) !== -1 })),
  };
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};

export const getProductByID = (id: string): Product | undefined => {
  return productCollections.products.find((product) => product.id === id);
};

export const likePost = (productId: string): Promise<{}> => {
  let isLiked = false;
  try {
    productCollections.likedList.push(productId);
    isLiked = true;
  } catch {
    isLiked = false;
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ liked: isLiked });
    }, 1000)
  });
};
