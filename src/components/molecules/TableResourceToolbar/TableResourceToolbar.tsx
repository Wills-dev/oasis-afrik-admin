import { FormEvent } from "react";

import { Table } from "@tanstack/react-table";

import ColumnSorting from "../ColumnSorting/ColumnSorting";
import SearchInput from "../SearchInput/SearchInput";

interface TableResourceToolbarProps<TData = unknown> {
  search?: string | number;
  handleChange?: (search: string) => void;
  handleClear?: () => void;
  onSubmit?: (e: FormEvent) => void;
  table: Table<TData>;
}

const TableResourceToolbar = ({
  search,
  handleChange,
  handleClear,
  onSubmit,
  table,
}: TableResourceToolbarProps) => {
  const showSearch =
    search !== undefined &&
    handleChange !== undefined &&
    handleClear !== undefined &&
    onSubmit !== undefined;

  return (
    <div className="flex justify-between items-center w-full gap-6">
      {showSearch && (
        <SearchInput
          value={search}
          handleChange={handleChange}
          handleClear={handleClear}
          onSubmit={onSubmit}
        />
      )}

      <ColumnSorting table={table} />
    </div>
  );
};

export default TableResourceToolbar;
