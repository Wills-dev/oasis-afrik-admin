import { useQuery } from "@tanstack/react-query";
import { useTableState } from "./useTableState";
import { getAllUsers } from "../api/user";

export const useGetAllUsers = (role: "ADMIN" | "USER") => {
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
    queryKey: ["all users", submittedQuery, limit, currentPage, status, role],
    queryFn: () =>
      getAllUsers({
        currentPage,
        limit,
        search: submittedQuery,
        status,
        role,
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
