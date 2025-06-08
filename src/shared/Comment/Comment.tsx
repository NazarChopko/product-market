import { FC } from 'react';
import Image from 'next/image';

type CommentProps = {
  comment: string;
  date: string;
  userName: string;
  rating: number;
};

const Comment: FC<CommentProps> = ({ comment, date, userName, rating }) => {
  return (
    <div className="p-2 rounded-md shadow-sm">
      <div className="flex justify-between items-center ">
        <div className="flex items-end gap-2">
          {' '}
          <Image src="/profile-user.png" width={50} height={50} alt="user profile" className="w-[32px]" />
          <span className="text-primary-text-grey font-medium">{userName}</span>
        </div>
        <p className="font-bold">{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className="text-black pl-[40px] text-[18px]">{comment}</div>
      <div className="text-end">
        Rating:<span className="font-bold">{rating}</span>
      </div>
    </div>
  );
};

export default Comment;
