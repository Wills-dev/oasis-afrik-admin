import { useQuery } from "@tanstack/react-query";
import { useTableState } from "./useTableState";
import { getAllCurrencies } from "../api/currency";

export const useGetAllCurrencies = () => {
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
    queryKey: ["all currencies", submittedQuery, limit, currentPage, status],
    queryFn: () =>
      getAllCurrencies({
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
