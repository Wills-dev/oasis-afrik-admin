import { FormEvent } from "react";

import { Table } from "@tanstack/react-table";

import ColumnSorting from "../ColumnSorting/ColumnSorting";
import SearchInput from "../SearchInput/SearchInput";
import { DateFilterValue } from "@/lib/types";
import DateFilterComponent from "@/components/organisms/DateFilterComponent/DateFilterComponent";

interface TableResourceToolbarProps<TData = unknown> {
  search?: string | number;
  handleChange?: (search: string) => void;
  handleClear?: () => void;
  onSubmit?: (e: FormEvent) => void;
  table: Table<TData>;
  setSelectedDateFilterValue?: (value: DateFilterValue) => void;
}

const TableResourceToolbar = ({
  search,
  handleChange,
  handleClear,
  onSubmit,
  table,
  setSelectedDateFilterValue,
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
      <div className="flex justify-end items-center gap-6">
        {setSelectedDateFilterValue !== undefined && (
          <DateFilterComponent
            onDateChange={(value) => {
              setSelectedDateFilterValue(value);
            }}
          />
        )}
        <ColumnSorting table={table} />
      </div>
    </div>
  );
};

export default TableResourceToolbar;
