'use client';

import Header from '@/components/Header';
import { FC } from 'react';

import useGetCurrentUser from '@/hooks/useGetCurrentUser';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const { user, isLoading, error } = useGetCurrentUser();

  return (
    <>
      <Header username={user?.username} />
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center text-[36px] text-primary">Loading...</div>
      ) : error ? (
        <div className="w-full h-full flex justify-center items-center text-[36px] text-primary">{error}</div>
      ) : (
        children
      )}
    </>
  );
};

export default AppLayout;
