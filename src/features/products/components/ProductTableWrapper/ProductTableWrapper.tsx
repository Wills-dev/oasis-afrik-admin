"use client";

import { ColumnDef } from "@tanstack/react-table";

import TableResourceToolbar from "@/components/organisms/TableResourceToolbar/TableResourceToolbar";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

import { Column } from "./Column";

interface ProductTableWrapperProps<TData = unknown> {
  search: string;
  handleSearchChange: (search: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
  handleSearch: () => void;
  handleClear: () => void;
  data: TData[];
  totalPages: number;
  currentPage: number;
  prevPage: () => void;
  nextPage: (totalPages: number) => void;
  goToLastPage: (totalPages: number) => void;
  goToFirstPage: () => void;
  isFirstPage: () => boolean;
  isLastPage: (totalPages: number) => boolean;
  limit: number;
  setLimit: (limit: number) => void;
}

const ProductTableWrapper = ({
  search,
  handleSearchChange,
  filter,
  setFilter,
  handleSearch,
  handleClear,
  data,
  totalPages,
  currentPage,
  prevPage,
  nextPage,
  goToLastPage,
  goToFirstPage,
  isFirstPage,
  isLastPage,
  limit,
  setLimit,
}: ProductTableWrapperProps) => {
  const typedColumns = Column as ColumnDef<unknown>[];

  return (
    <div className="space-y-6 p-6 border border-gray-200 rounded-lg">
      <TableResourceToolbar
        search={search}
        handleChange={handleSearchChange}
        initiateSearch={handleSearch}
        filter={filter}
        setFilter={setFilter}
        title="Products"
        handleClear={handleClear}
      />
      <div className="">
        <TableWrapper
          columns={typedColumns}
          data={data || []}
          totalPages={totalPages || 0}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          limit={limit}
          setLimit={setLimit}
        />
      </div>
    </div>
  );
};

export default ProductTableWrapper;
