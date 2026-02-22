import { getAllOrders } from "../api";
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
    status,
    setCurrentPage,
    handleStatusChange,
    selectedDateFilterValue,
    setSelectedDateFilterValue,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: [
      "all orders",
      submittedQuery,
      limit,
      currentPage,
      status,
      selectedDateFilterValue,
    ],
    queryFn: () =>
      getAllOrders({
        currentPage,
        limit,
        search: submittedQuery,
        status,
        selectedDateFilterValue,
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
    setSelectedDateFilterValue,
  };
};
