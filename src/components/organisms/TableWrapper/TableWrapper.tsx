"use client";

import { useState } from "react";

import { Table } from "@/components/ui/table";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  RowSelectionState,
} from "@tanstack/react-table";
import TableHeaderWrap from "@/components/molecules/TableHeaderWrap/TableHeaderWrap";
import TableBodyWrap from "@/components/molecules/TableBodyWrap/TableBodyWrap";
import PaginationComponent from "@/components/molecules/PaginationComponent/PaginationComponent";
import { TableWrapperProps } from "@/lib/types";
import TableResourceToolbar from "@/components/molecules/TableResourceToolbar/TableResourceToolbar";

const TableWrapper = ({
  columns,
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
  search,
  handleChange,
  handleClear,
  onSubmit,
  setCurrentPage,
}: TableWrapperProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex: 0,
        pageSize: limit || 10,
      },
    },
  });

  return (
    <div className="space-y-2">
      <TableResourceToolbar
        search={search}
        handleChange={handleChange}
        handleClear={handleClear}
        onSubmit={onSubmit}
        table={table}
      />
      <Table className="">
        <TableHeaderWrap table={table} />
        <TableBodyWrap table={table} columns={columns} />
      </Table>
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        goToLastPage={goToLastPage}
        goToFirstPage={goToFirstPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        limit={limit}
        setLimit={setLimit}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TableWrapper;
