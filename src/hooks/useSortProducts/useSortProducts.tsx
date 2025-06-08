import { useSearchParams, useRouter } from 'next/navigation';

type SortType = 'asc' | 'desc';

const useSortProducts = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSort = (type: SortType) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set('page', '1');
    params.set('sortBy', 'title');
    params.set('order', type);

    router.push(`?${params.toString()}`);
  };

  return handleSort;
};

export default useSortProducts;
