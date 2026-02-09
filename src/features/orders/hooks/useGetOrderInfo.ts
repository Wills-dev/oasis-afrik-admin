import { useQuery } from "@tanstack/react-query";
import { getOrderInfo } from "../api";

export const useGetOrderInfo = (orderId: string) => {
  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["order info", orderId],
    queryFn: () => getOrderInfo({ orderId }),
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
