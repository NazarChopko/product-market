import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectorUser } from '@/redux/selectors/userSelector';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';
import { useRouter } from 'next/navigation';
import { removeLocaleStorage } from '@/helpers/handleLocaleStorage';
import { setError, getCurrentUser } from '@/redux/slices/userSlice';

const useGetCurrentUser = () => {
  const { user, isLoading, error } = useSelector(selectorUser);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      removeLocaleStorage('accessToken');
      dispatch(setError());
      return router.push('/login');
    }

    const token = localStorage.getItem('accessToken');

    if (!user && token) {
      dispatch(getCurrentUser());
    }
  }, [error]);

  return { user, isLoading, error };
};

export default useGetCurrentUser;
