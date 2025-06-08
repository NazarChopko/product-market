import { FC } from 'react';
import UserComment from '@/shared/Comment';

import type { Comment } from '@/types/products';

type ProductInfoProps = {
  rating: number;
  brand: string;
  category: string;
  availabilityStatus: string;
  price: number;
  discountPercentage: number;
  weight: number;
  reviews: Comment[];
};

const ProductInfo: FC<ProductInfoProps> = ({
  brand,
  rating,
  category,
  availabilityStatus,
  discountPercentage,
  price,
  weight,
  reviews
}) => {
  return (
    <div className="w-[60%] rounded-xl shadow-xl">
      <p className="text-center text-[34px] font-semibold">Product info:</p>
      <div className="flex flex-col gap-2 px-[20px]">
        <p className="text-[18px] text-black font-medium ">
          Rating: <span className="text-primary-text-grey font-bold">{rating}</span>
        </p>
        <p className="text-[18px] text-black font-medium ">
          Availability status: <span className="text-primary-text-grey font-bold">{availabilityStatus}</span>
        </p>

        <p className="text-[18px] text-black font-medium ">
          Brand: <span className="text-primary-text-grey font-bold">{brand}</span>
        </p>
        <p className="text-[18px] text-black font-medium ">
          Category: <span className="text-primary-text-grey font-bold">{category}</span>
        </p>
        <p className="text-[18px] text-black font-medium ">
          Price with discount:{' '}
          <span className="text-primary-text-grey font-bold">
            ${(price - (discountPercentage * price) / 100).toFixed(1)}
          </span>
        </p>
        <p className="text-[18px] text-black font-medium ">
          Weight: <span className="text-primary-text-grey font-bold">{weight}</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 px-[10px]">
        <p className="text-[28px] text-center font-semibold">Comments:</p>
        {reviews.map((comment, i) => (
          <UserComment
            key={i}
            userName={comment.reviewerName}
            date={comment.date}
            rating={comment.rating}
            comment={comment.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
