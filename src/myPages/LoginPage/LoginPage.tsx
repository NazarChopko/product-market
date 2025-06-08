'use client';
import SignIn from '@/components/SignIn';
import RestrictedRoute from '@/layouts/RestrictedRoute/RestrictedRoute';

const LoginPage = () => {
  return (
    <RestrictedRoute>
      <main className="flex items-center justify-center h-[calc(100%-64px)] px-[20px]">
        <SignIn />
      </main>
    </RestrictedRoute>
  );
};

export default LoginPage;
