'use client';

import { useState } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import FormInput from '@/shared/FormInput';
import Button from '@/shared/Button/Button';

import { login } from '@/services/user';
import { setUser } from '@/redux/slices/userSlice';
import { setLocaleStorage } from '@/helpers/handleLocaleStorage';
import { validateCredentials } from '@/helpers/signin.helper';
import { errorTypeGuard } from '../../types/typeguards';
import { useAppDispatch } from '@/hooks/useAppDispatch/useAppDispatch';

const SignIn = () => {
  const [fields, setFields] = useState<{ username: string; password: string }>({ username: '', password: '' });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await login(fields.username, fields.password);
      dispatch(setUser(user));
      setLocaleStorage('accessToken', user.accessToken);
      toast.success('Successfully logged in!');
      router.push('/admin_dashboard');
    } catch (error) {
      if (error instanceof AxiosError && errorTypeGuard(error.response?.data)) {
        return toast.error(error.response?.data.message);
      }

      toast.error('Something went wrong! Try one more time!');
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 border-1 border-primary p-4 rounded-md w-[400px]">
        <p className="text-center text-2xl">Sign in</p>
        <FormInput name="username" labelText="Username" onChange={handleInputChange} value={fields.username} />
        <FormInput
          name="password"
          labelText="Password"
          type="password"
          onChange={handleInputChange}
          value={fields.password}
        />
        <Button type="submit" disabled={!validateCredentials(fields.username, fields.password)}>
          Sign in
        </Button>
      </form>
    </>
  );
};

export default SignIn;
