import { Product, ProductInput } from './models/product';
import { generateRandomID } from './utils/generateRandomID';

const productDummyData = require('./dummyData.json');

const productCollections = {
  products: [
    ...productDummyData,
  ] as Product[],
};

export const getProducts = () => {
  return productCollections.products;
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
