import { FC } from 'react';
import Image from 'next/image';

type ProductLargeCardProps = { title: string; tags: string[]; images: string[]; description: string; price: number };

const ProductLargeCard: FC<ProductLargeCardProps> = ({ title, description, price, images, tags }) => {
  return (
    <div className="w-[40%] flex flex-col gap-2 rounded-xl shadow-xl">
      <p className="text-black font-semibold text-[28px] px-[10px] pt-[20px]">{title}</p>
      <Image src={images[0]} width={100} height={100} alt={title} className="object-contain w-full h-[60%]" />
      {tags.length ? (
        <div className="flex items-center gap-1 pl-[10px] text-[14px]">
          {tags.map((tag, i) => (
            <span className="text-primary-text-grey" key={i}>
              #{tag}
            </span>
          ))}
        </div>
      ) : null}
      <p className="px-[10px]">{description}</p>
      <p className="px-[10px] pt-[20px] text-[28px] text-end">${price}</p>
    </div>
  );
};

export default ProductLargeCard;
