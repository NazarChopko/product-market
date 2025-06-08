'use client';

import { FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectorUser } from '@/redux/selectors/userSelector';
import { getLocaleStorage } from '@/helpers/handleLocaleStorage';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLoading } = useSelector(selectorUser);

  const router = useRouter();
  const token = typeof window !== 'undefined' && getLocaleStorage('accessToken');

  useEffect(() => {
    if ((!token || !user?.username) && !isLoading) {
      return router.push('/');
    }
  }, [isLoading]);

  return <>{user?.username ? children : null}</>;
};

export default ProtectedRoute;
