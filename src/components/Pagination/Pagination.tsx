import { useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ButtonProps {
  content: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}

interface PaginationNavProps {
  gotoPage: (page: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
}

function Button({ content, onClick, active, disabled }: ButtonProps) {
  return (
    <button
      style={{ background: active ? '#007554' : '#fff' }}
      className={`flex h-9 w-9 cursor-pointer flex-col items-center justify-center rounded-lg text-sm font-normal shadow-[0_4px_10px_rgba(0,0,0,0.03)] transition-colors ${
        active ? 'bg-[#007554] text-white' : 'text-[#007554]'
      } ${
        !disabled
          ? 'text bg-white hover:bg-[#007554] hover:text-black'
          : 'cursor-not-allowed bg-white text-green-300'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function Pagination({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
}: PaginationNavProps) {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;

    const visiblePageButtonCount = 3;
    const pageIndices = Array.from({ length: visiblePageButtonCount })
      .map((_, i) => pageIndex - visiblePageButtonCount + i + 1)
      .filter((index) => index >= 0 && index < pageCount);

    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap + 1}>
        <Button
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap + 1)}
          active={pageIndex === pageIndexToMap + 1}
        />
      </li>
    ));
  }, [gotoPage, pageCount, pageIndex]);

  return (
    <ul className='flex gap-2'>
      <li>
        <Button
          content={
            <div className='ml-1 flex'>
              <FaChevronLeft size='0.6rem' />
              <FaChevronLeft size='0.6rem' className='-translate-x-1/2' />
            </div>
          }
          onClick={() => gotoPage(1)}
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <Button
          content={
            <div className='ml-1 flex'>
              <FaChevronRight size='0.6rem' />
              <FaChevronRight size='0.6rem' className='-translate-x-1/2' />
            </div>
          }
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  );
}

export default Pagination;
