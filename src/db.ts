import { Product } from './models/product';

const productDummyData = require('./dummyData.json');

const productCollections = {
  products: [
    ...productDummyData.data
  ] as Product[],
};

export const getProducts = async (page: number): Promise<{ products: Product[], page: number, totalCount: number }> => {
  const ITEM_COUNT = 10;
  return await new Promise((resolve) => {
    const startPage = (page - 1) * ITEM_COUNT;
    setTimeout(() => {
      const productList = productCollections.products.slice(startPage, startPage + ITEM_COUNT);
      resolve({
        products: productList,
        page,
        totalCount: productCollections.products.length
      });
    }, 1000);
  });
};

export const getRecommendProducts = async (): Promise<{ products: Product[] }> => {
  const randomIndexList: Array<number> = [];
  while (randomIndexList.length < 4) {
    const randomIndex = Math.floor(Math.random() * productCollections.products.length);
    if (randomIndexList.indexOf(randomIndex) === -1) {
      randomIndexList.push(randomIndex);
    }
  }
  const result = {
    products: randomIndexList
      .map((index) => productCollections.products[index]),
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

export const setLikeProduct = (productId: string): Promise<{ product: Product }> => {
  const selectedProduct = productCollections.products.find(({ id }) => productId === id);
  const product = {
    ...selectedProduct,
    liked: !selectedProduct.liked,
  };

  uppdateProduct(productId, product);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ product });
    }, 1000)
  });
};

const uppdateProduct = (productId, updateProduct) => {
  const selectedProductIndex = productCollections.products.findIndex(({ id }) => productId === id);

  productCollections.products[selectedProductIndex] = updateProduct;
}

