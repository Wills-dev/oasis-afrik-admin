import SearchComponent from "@/components/molecules/SearchComponent/SearchComponent";
import TimeFilterDropdown from "@/components/molecules/TimeFilterDropdown/TimeFilterDropdown";
import { FormEvent } from "react";

interface TableResourceToolbarProps {
  title: string;
  search: string;
  handleChange: (search: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
  initiateSearch: (e: FormEvent) => void;
  handleClear: () => void;
}

const TableResourceToolbar = ({
  title,
  search,
  handleChange,
  filter,
  setFilter,
  initiateSearch,
  handleClear,
}: TableResourceToolbarProps) => {
  return (
    <div className="flex md:items-center justify-between max-md:flex-col gap-6">
      <h6 className="font-medium sm:text-lg">{title}</h6>
      <div className="flex-1 flex gap-2 justify-end items-center">
        <SearchComponent
          search={search}
          handleChange={handleChange}
          initiateSearch={initiateSearch}
          handleClear={handleClear}
        />
        <TimeFilterDropdown value={filter} onChange={setFilter} />
      </div>
    </div>
  );
};

export default TableResourceToolbar;
