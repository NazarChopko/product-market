import { FC, useState, useEffect } from 'react';

import useSortProducts from '@/hooks/useSortProducts';
import useSearchProducts from '@/hooks/useSearchProducts';
import { useSearchParams } from 'next/navigation';

const ProductsHandleBar: FC = () => {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();

  const handleSort = useSortProducts();
  const { handleCancelSearch, handleSearch } = useSearchProducts(search);

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString());
    const q = params.get('q');
    setSearch(q || '');
  }, []);

  return (
    <div className="p-4 pt-0 flex justify-evenly">
      <div className="flex items-center gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 bg-primary-grey text-primary-text-grey border-none rounded-xl outline-none"
        />{' '}
        <button onClick={handleSearch} className=" border-1 border-primary rounded-xl p-2 cursor-pointer">
          Search
        </button>
        <button
          onClick={() => {
            handleCancelSearch();
            setSearch('');
          }}
          className=" border-1 border-primary rounded-xl p-2 cursor-pointer"
        >
          Cancel
        </button>
      </div>
      <div className="flex items-center gap-1">
        Sort by title:{' '}
        <div className="flex items-center gap-1">
          <button onClick={() => handleSort('asc')} className=" border-1 border-primary rounded-xl p-2 cursor-pointer">
            ASC
          </button>
          <button onClick={() => handleSort('desc')} className=" border-1 border-primary rounded-xl p-2 cursor-pointer">
            DESC
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsHandleBar;
