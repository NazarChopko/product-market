'use client';
import { FC } from 'react';

import ProductsWidget from '@/widgets/ProductsWidget';
import { Products } from '@/types/products';

type ProductsPageProps = {
  products: Products;
};

const ProductsPage: FC<ProductsPageProps> = ({ products }) => {
  return <ProductsWidget products={products} />;
};

export default ProductsPage;
