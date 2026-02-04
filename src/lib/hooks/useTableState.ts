import { useState } from "react";

export const useTableState = () => {
  const [tab, setTab] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);

  const nextPage = (totalPages: number) => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else {
      return;
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      return;
    }
  };

  const goToLastPage = (totalPages: number) => {
    setCurrentPage(totalPages);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const isLastPage = (totalPages: number) => {
    return currentPage === totalPages;
  };

  const isFirstPage = () => {
    return currentPage === 1;
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleClear = () => {
    setSearch("");
    setSubmittedQuery(null);
  };

  const handleSearch = async () => {
    setCurrentPage(1);
    setSubmittedQuery(search);
  };

  return {
    currentPage,
    limit,
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    handleClear,
    submittedQuery,
    handleSearch,
    setFilter,
    filter,
    tab,
    setTab,
  };
};
