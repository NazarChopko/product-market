'use client';

import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

type ReduxProviderProps = {
  children: React.ReactNode;
};

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
