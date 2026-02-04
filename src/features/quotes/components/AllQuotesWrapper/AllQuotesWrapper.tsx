"use client";

import TableResourceToolbar from "@/components/organisms/TableResourceToolbar/TableResourceToolbar";
import PaginationComponent from "@/components/molecules/PaginationComponent/PaginationComponent";
import QuoteCard from "../QuoteCard/QuoteCard";

import { Quote } from "../../types";
import { FormEvent } from "react";

const AllQuotesWrapper = ({
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
  filter,
  setFilter,
  tab,
  totalQuotes,
}: {
  data: Quote[] | [];
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
  search: string;
  handleChange: (search: string) => void;
  handleClear: () => void;
  onSubmit: (e: FormEvent) => void;
  setCurrentPage?: (page: number) => void;
  filter: string;
  setFilter: (filter: string) => void;
  tab: string;
  totalQuotes: number;
}) => {
  return (
    <div className="max-w-4xl space-y-6">
      <TableResourceToolbar
        search={search}
        handleChange={handleChange}
        initiateSearch={onSubmit}
        filter={filter}
        setFilter={setFilter}
        title=""
        handleClear={handleClear}
      />
      <div className="space-y-4">
        {data?.map((quote, index) => (
          <QuoteCard key={index} quote={quote} tab={tab} />
        ))}
      </div>
      {totalQuotes > limit && (
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
      )}
    </div>
  );
};

export default AllQuotesWrapper;
