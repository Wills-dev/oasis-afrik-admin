import { useQuery } from "@tanstack/react-query";

import { getPayments } from "../api";
import { useTableState } from "@/lib/hooks/useTableState";

export const useGetPayments = () => {
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
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["payments", submittedQuery, limit, currentPage, filter],
    queryFn: () =>
      getPayments({ currentPage, limit, search: submittedQuery, filter }),
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
  };
};
