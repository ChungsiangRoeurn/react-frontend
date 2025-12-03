import { type FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="px-3 py-1 border rounded hover:bg-gray-100"
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded hover:bg-[#01656e] hover:text-[#ffff] ${
            page === currentPage ? "bg-[#007580] text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        className="px-3 py-1 border rounded hover:bg-gray-100"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
