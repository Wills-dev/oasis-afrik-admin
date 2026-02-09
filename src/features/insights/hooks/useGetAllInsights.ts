import { useQuery } from "@tanstack/react-query";

import { getAllInsights } from "../api";
import { useTableState } from "@/lib/hooks/useTableState";

export const useGetAllInsights = () => {
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
    status,
    setCurrentPage,
    handleStatusChange,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["all insights", submittedQuery, limit, currentPage, status],
    queryFn: () =>
      getAllInsights({
        currentPage,
        limit,
        search: submittedQuery,
        status,
      }),
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
    setCurrentPage,
    handleStatusChange,
  };
};
