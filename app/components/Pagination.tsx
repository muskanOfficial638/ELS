// components/Pagination.tsx

import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  const handleClick = (page: number) => {
    if (onPageChange && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav className="flex items-center justify-center mt-8 space-x-1 text-sm">
      {/* Previous */}
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 border rounded-md ${
          currentPage === 1
            ? "text-gray-400 border-gray-200 cursor-not-allowed"
            : "border-gray-300 hover:bg-gray-100 cursor-pointer"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => handleClick(page)}
            className={`px-3 py-1 rounded-md border cursor-pointer ${
              page === currentPage
                ? "bg-[#0B2B66] text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-3 py-1 text-gray-400 select-none">
            ...
          </span>
        )
      )}

      {/* Next */}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border rounded-md ${
          currentPage === totalPages
            ? "text-gray-400 border-gray-200 cursor-not-allowed"
            : "border-gray-300 hover:bg-gray-100 cursor-pointer"
        }`}
      >
        Next
      </button>
    </nav>
  );
};

// Utility to generate page numbers with ellipses
function generatePageNumbers(
  current: number,
  total: number
): (number | string)[] {
  const delta = 1;
  const range: (number | string)[] = [];
  const rangeWithDots: (number | string)[] = [];

  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= current - delta && i <= current + delta)
    ) {
      range.push(i);
    }
  }

  let lastPage: number | undefined;

  for (const page of range) {
    if (typeof lastPage === "number") {
      const gap = Number(page) - lastPage;
      if (gap === 2) {
        rangeWithDots.push(lastPage + 1);
      } else if (gap > 2) {
        rangeWithDots.push("...");
      }
    }

    rangeWithDots.push(page);
    lastPage = Number(page);
  }

  return rangeWithDots;
}

export default Pagination;
