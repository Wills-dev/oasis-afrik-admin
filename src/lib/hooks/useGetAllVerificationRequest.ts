import { useQuery } from "@tanstack/react-query";
import { useTableState } from "./useTableState";
import { getAllVerificationRequest } from "../api";

export const useGetAllVerificationRequest = () => {
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
    handleStatusChange,
    setCurrentPage,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: [
      "verification request",
      submittedQuery,
      limit,
      currentPage,
      status,
    ],
    queryFn: () =>
      getAllVerificationRequest({
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
    handleStatusChange,
    setCurrentPage,
  };
};
