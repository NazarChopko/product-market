import { useEffect, useState, FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import ReactPaginate from 'react-paginate';

type PaginateProps = {
  itemsPerPage: number;
  items: number;
  currentPage: number;
};

const Paginate: FC<PaginateProps> = ({ itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(items / itemsPerPage);

  useEffect(() => {
    const currentPage = searchParams?.get('page');
    if (currentPage) {
      setCurrentPage(Number(currentPage) - 1);
    }
  }, [searchParams]);

  const handlePageClick = (event: { selected: number }) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set('page', String(event.selected + 1));

    setCurrentPage(event.selected);

    router.push(`?${params.toString()}`);
  };

  return (
    <div
      className={
        'justify-center flex  sm:gap-[10px] md:gap-[10px]  items-center py-[16px] px-[16px] lg:pr-[100px] xl:pr-[100px]'
      }
    >
      <ReactPaginate
        forcePage={currentPage}
        breakLabel="..."
        marginPagesDisplayed={2}
        nextLabel={'>'}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={'<'}
        renderOnZeroPageCount={null}
        containerClassName={'transaction_pagination-landing'}
        activeLinkClassName={'transaction_pagination-active-landing'}
        previousLinkClassName={'transaction_pagination-prev-landing'}
        nextLinkClassName={'transaction_pagination-next-landing'}
        pageLinkClassName={'transaction_pagination-page-landing'}
        breakLinkClassName="transaction_pagination-break"
      />
    </div>
  );
};

export default Paginate;
