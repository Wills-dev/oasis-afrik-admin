import { getOrders } from "../api";
import { useTableState } from "@/lib/hooks/useTableState";

import { useQuery } from "@tanstack/react-query";

export const useGetOrders = () => {
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
    queryKey: ["orders", submittedQuery, limit, currentPage, filter],
    queryFn: () =>
      getOrders({ currentPage, limit, search: submittedQuery, filter }),
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
