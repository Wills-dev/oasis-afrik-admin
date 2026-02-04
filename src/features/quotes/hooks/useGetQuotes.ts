import { useQuery } from "@tanstack/react-query";

import { getQuotes } from "../api";
import { useTableState } from "@/lib/hooks/useTableState";

export const useGetQuotes = () => {
  const {
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
    filter,
    setFilter,
    tab,
    setTab,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["quotes", submittedQuery, limit, currentPage, filter, tab],
    queryFn: () =>
      getQuotes({ currentPage, limit, search: submittedQuery, filter, tab }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    data,
    isPending,
    isLoading,
    isError,
    error,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    refetch,
    filter,
    setFilter,
    tab,
    setTab,
  };
};
