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
import ColumnSorting from "@/components/molecules/ColumnSorting/ColumnSorting";
import TableHeaderWrap from "@/components/molecules/TableHeaderWrap/TableHeaderWrap";
import TableBodyWrap from "@/components/molecules/TableBodyWrap/TableBodyWrap";
import PaginationComponent from "@/components/molecules/PaginationComponent/PaginationComponent";
import { TableWrapperProps } from "@/lib/types";

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
      <div className="flex justify-end">
        <ColumnSorting table={table} />
      </div>
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
      />
    </div>
  );
};

export default TableWrapper;
