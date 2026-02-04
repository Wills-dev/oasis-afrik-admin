import { getProducts } from "../api";
import { useTableState } from "@/lib/hooks/useTableState";

import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
  const {
    search,
    handleSearchChange,
    handleClear,
    submittedQuery,
    handleSearch,
    filter,
    setFilter,
  } = useTableState();

  const limit = 20;

  const {
    data,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products", submittedQuery, filter],
    queryFn: ({ pageParam = 1 }) =>
      getProducts({
        currentPage: pageParam,
        limit,
        search: submittedQuery,
        filter,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const allProducts = data?.pages.flatMap((page) => page.data) ?? [];

  return {
    search,
    handleSearchChange,
    products: allProducts,
    isPending,
    isLoading,
    isError,
    error,
    handleSearch,
    handleClear,
    limit,
    refetch,
    filter,
    setFilter,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
