import ProductsPage from '@/myPages/ProductsPage';
import { getProductsSSR } from '@/services/products';

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ page: number; sortBy: string; order: string; q: string }>;
}) {
  const { page, sortBy, order, q } = await searchParams;
  const products = await getProductsSSR(page || 0, sortBy, order, q);

  return <ProductsPage products={products} />;
}
