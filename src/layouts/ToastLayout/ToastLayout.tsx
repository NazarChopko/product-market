'use client';

import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

type ToastLayoutProps = {
  children: React.ReactNode;
};

const ToastLayout: FC<ToastLayoutProps> = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </>
  );
};

export default ToastLayout;
