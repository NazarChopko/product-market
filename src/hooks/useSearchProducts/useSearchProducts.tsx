import { useRouter, useSearchParams } from 'next/navigation';

const useSearchProducts = (search: string) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams?.toString());
    if (search) {
      params.set('q', search);
    } else {
      params.delete('q');
    }
    params.set('page', '1');
    router.push(`?${params.toString()}`);
  };

  const handleCancelSearch = () => {
    const params = new URLSearchParams(searchParams?.toString());
    params.delete('q');
    params.set('page', '1');
    router.push(`?${params.toString()}`);
  };

  return {
    handleSearch,
    handleCancelSearch
  };
};

export default useSearchProducts;
