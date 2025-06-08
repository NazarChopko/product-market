import { getProduct } from '@/services/products';
import ProductPage from '@/myPages/ProductPage';
const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getProduct(id);

  return <ProductPage product={product} />;
};

export default Product;
