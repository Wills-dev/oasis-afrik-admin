"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Column } from "./Column";
import { payments } from "../../constants";
import { useGetPayments } from "../../hooks/useGetPayments";

import TableResourceToolbar from "@/components/organisms/TableResourceToolbar/TableResourceToolbar";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

const PaymentTableWrapper = () => {
  const {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    handleSearch,
    currentPage,
    limit,
    handleClear,
    // data,
    // isPending,
    // isLoading,
    // isError,
    // error,
    // refetch,
    filter,
    setFilter,
  } = useGetPayments();

  const typedColumns = Column as ColumnDef<unknown>[];

  return (
    <div className="space-y-6 p-[24px] border border-gray-200 rounded-lg">
      <TableResourceToolbar
        search={search}
        handleChange={handleSearchChange}
        initiateSearch={handleSearch}
        filter={filter}
        setFilter={setFilter}
        title="Orders"
        handleClear={handleClear}
      />
      <div className="">
        <TableWrapper
          columns={typedColumns}
          data={payments}
          totalPages={1}
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

export default PaymentTableWrapper;
