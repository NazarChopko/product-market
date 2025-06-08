import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/shared/Button/Button';

type ProductCardProps = {
  id: number;
  image: string;
  title: string;
  description?: string;
  category?: string;
  price: number;
  isAdmin?: string | null;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
};

const ProductCard: FC<ProductCardProps> = ({ id, image, title, price, isAdmin = null, onDelete, onEdit }) => {
  return (
    <>
      <div className="w-[230px]  border-1 border-primary rounded-xl h-full flex flex-col justify-between  hover:scale-105 transition-all duration-300 pb-[10px] overflow-hidden">
        <Link href={`/products/${id}`} className="w-full  flex flex-col">
          <div className="flex  justify-center gap-2 h-[200px] w-full">
            <Image src={image} alt={title} width={200} height={200} className="object-cover " />
          </div>
          <div className="p-2">
            <p>{title}</p>
            <p>${price}</p>
          </div>
        </Link>
        {isAdmin && (
          <div className="flex justify-around">
            <Button onClick={() => onEdit && onEdit(id)}>Edit</Button>
            <Button onClick={() => onDelete && onDelete(id)}>Delete</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
