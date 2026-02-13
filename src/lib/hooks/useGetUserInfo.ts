import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../api/user";

export const useGetUserInfo = (userId: string) => {
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
  };
};
