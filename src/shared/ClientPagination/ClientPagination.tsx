import { FC } from 'react';

import ReactPaginate from 'react-paginate';

type PaginateProps = {
  itemsPerPage: number;
  items: number;
  currentPage: number;
  onChangePage: (page: number) => void;
};

const ClientPagination: FC<PaginateProps> = ({ itemsPerPage, items, currentPage, onChangePage }) => {
  const pageCount = Math.ceil(items / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    onChangePage(event.selected);
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

export default ClientPagination;
