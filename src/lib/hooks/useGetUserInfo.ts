import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../api/user";
import { useTableState } from "./useTableState";

export const useGetUserInfo = (userId: string) => {
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
    tab,
    handleSwithTab,
    setCurrentPage,
    handleStatusChange,
    selectedDateFilterValue,
    setSelectedDateFilterValue,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["user info", userId],
    queryFn: () => getUserInfo({ userId }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isLoading,
    isPending,
    isError,
    error,
    refetch,
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    currentPage,
    limit,
    setCurrentPage,
    tab,
    handleSwithTab,
  };
};
