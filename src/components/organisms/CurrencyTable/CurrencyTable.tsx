"use client";

import { motion } from "framer-motion";

import { ColumnDef } from "@tanstack/react-table";

import { CurrencyColumn } from "./CurrencyColumn";
import { HistoryProps } from "@/lib/types";

import TableLoader from "@/components/atoms/skeleton/TableLoader";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

const CurrencyTable = ({
  isLoading,
  data,
  totalPages,
  currentPage,
  prevPage,
  nextPage,
  goToFirstPage,
  goToLastPage,
  isFirstPage,
  isLastPage,
  limit,
  setLimit,
  search,
  handleChange,
  handleClear,
  onSubmit,
  setCurrentPage,
}: HistoryProps) => {
  const typedColumns = CurrencyColumn as ColumnDef<unknown>[];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="space-y-6 pt-10"
    >
      {isLoading ? (
        <TableLoader />
      ) : (
        <TableWrapper
          columns={typedColumns}
          data={data || []}
          totalPages={totalPages}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          limit={limit}
          setLimit={setLimit}
          search={search}
          handleChange={handleChange}
          handleClear={handleClear}
          onSubmit={onSubmit}
          setCurrentPage={setCurrentPage}
        />
      )}
    </motion.div>
  );
};

export default CurrencyTable;
