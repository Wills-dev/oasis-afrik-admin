import { useQuery } from "@tanstack/react-query";
import { getInsightInfo } from "../api";

export const useGetInsightInfo = (id: string) => {
  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["insight info", id],
    queryFn: () => getInsightInfo({ id }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
  };
};
