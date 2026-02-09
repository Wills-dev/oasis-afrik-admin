import { useQuery } from "@tanstack/react-query";
import { getVerificationInfo } from "../api";

export const useGetVerificationInfo = (id: string) => {
  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["verification info", id],
    queryFn: () => getVerificationInfo({ id }),
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
  };
};
