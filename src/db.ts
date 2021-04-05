import { Product, ProductInput } from './models/product';
import { generateRandomID } from './utils/generateRandomID';

const productDummyData = require('./dummyData.json');

const productCollections = {
  products: [
    ...productDummyData.data
  ] as Product[],
};

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productCollections.products);
    }, 1000);
  });
};

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
