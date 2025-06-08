import { removeLocaleStorage } from '@/helpers/handleLocaleStorage';
import { removeUser } from '@/redux/slices/userSlice';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const useLogout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const logout = () => {
    removeLocaleStorage('accessToken');
    dispatch(removeUser());
    toast.success('Successfully logged out!');
    router.push('/login');
  };

  return logout;
};

export default useLogout;
