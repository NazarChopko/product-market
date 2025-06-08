'use client';

import { FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectorUser } from '@/redux/selectors/userSelector';

type RestrictedRouteProps = {
  children: React.ReactNode;
};

const RestrictedRoute: FC<RestrictedRouteProps> = ({ children }) => {
  const { user, isLoading } = useSelector(selectorUser);

  const router = useRouter();

  useEffect(() => {
    if (user?.username && !isLoading) {
      return router.push('/admin_dashboard');
    }
  }, [isLoading]);

  return <>{user?.username ? null : children}</>;
};

export default RestrictedRoute;
