import { FC } from 'react';
import Link from 'next/link';
import Button from '@/shared/Button/Button';

import useLogout from '@/hooks/useLogout';

type HeaderProps = {
  username: string | undefined;
};

const Header: FC<HeaderProps> = ({ username }) => {
  const logout = useLogout();

  return (
    <div>
      <header className="shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1)] ">
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/products" className="flex items-center gap-1">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-primary">Products App</span>
            </Link>
            <div className="flex items-center lg:order-2 ">
              {username ? (
                <div className="flex items-center gap-2">
                  Hello, {username} <Button onClick={logout}>Log out</Button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="text-primary  bg-white border-2 hidden lg:block border-primary hover:opacity-80 hover:scale-110 outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
                >
                  Log in
                </Link>
              )}
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {username && (
              <Link href="/admin_dashboard" className="text-primary hover:scale-110 transition-all duration-300">
                Admin dashboard
              </Link>
            )}
          </div>
        </nav>
      </header>

      <script defer src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
};

export default Header;
