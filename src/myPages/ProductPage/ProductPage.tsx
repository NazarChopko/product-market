'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';

import type { Product } from '@/types/products';
import ProductInfo from '@/components/ProductInfo';
import ProductLargeCard from '@/components/ProductLargeCard';

type ProductPage = { product?: Product };

const ProductPage: FC<ProductPage> = ({ product }) => {
  const router = useRouter();

  return (
    <main className="flex flex-col  justify-center gap-[0px] h-100%  px-[20px] py-[10px]">
      {product && (
        <>
          <div onClick={() => router.back()} className="text-[24px] cursor-pointer flex items-center gap-1">
            {' '}
            <p className="rotate-180 inline-block pb-[3px]">▶</p> Go back
          </div>
          <div className="flex  justify-center gap-[30px] py-[20px]">
            <ProductLargeCard
              title={product.title}
              description={product.description}
              price={product.price}
              images={product.images}
              tags={product.tags}
            />
            <ProductInfo
              rating={product.rating}
              weight={product.weight}
              discountPercentage={product.discountPercentage}
              reviews={product.reviews}
              price={product.price}
              category={product.category}
              brand={product.brand}
              availabilityStatus={product.availabilityStatus}
            />
          </div>
        </>
      )}
    </main>
  );
};

export default ProductPage;
