import { Product, ProductInput } from './models/product';
import { generateRandomID } from './utils/generateRandomID';

const productDummyData = require('./dummyData.json');

const productCollections = {
  products: [
    ...productDummyData.data
  ] as Product[],
};

const ITEM_COUNT = 10;
export const getProducts = async (page: number): Promise<{products: Product[], page: number, totalCount: number}> => {
  return await new Promise((resolve) => {
    const startPage = (page - 1) * ITEM_COUNT;
    setTimeout(() => {
      resolve({
        products: productCollections.products.slice(startPage, startPage + ITEM_COUNT),
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
    products: randomIndexList.map((index) => productCollections.products[index]),
  };
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}

export const getProductByID = (id: string): Product | undefined => {
  return productCollections.products.find((product) => product.id === id);
};

export const createProduct = (product: ProductInput): Product => {
  const newProduct = {
    ...product,
    id: generateRandomID("product_"),
  };
  productCollections.products.push(newProduct);
  return newProduct;
};
