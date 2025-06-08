import { FC } from 'react';
import type { Products } from '@/types/products';
import ProductCard from '@/components/Product/Product';
import Paginate from '@/shared/Pagination';
import ProductsHandleBar from '@/components/ProducrsHandleBar';

type ProductCardProps = {
  products?: Products;
};

const ProductsWidget: FC<ProductCardProps> = ({ products }) => {
  return (
    <main className="flex flex-col justify-start content-start  h-[calc(100%-64px)] px-[20px] py-[20px]">
      {products ? (
        <>
          <ProductsHandleBar />
          {products.products.length ? (
            <ul className="flex justify-center  flex-wrap gap-4">
              {products.products.map((product) => (
                <li key={product.id}>
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    image={product.images[0]}
                    description={product.description}
                    category={product.category}
                    price={product.price}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center pt-[30px] text-[36px]">No products</div>
          )}
          <Paginate itemsPerPage={10} items={products.total} currentPage={products.skip / products.limit} />{' '}
        </>
      ) : (
        ''
      )}
    </main>
  );
};

export default ProductsWidget;
