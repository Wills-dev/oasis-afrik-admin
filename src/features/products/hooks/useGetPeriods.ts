import { useQuery } from "@tanstack/react-query";
import { getProductPeriods } from "../api";

export const useGetPeriods = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["periods"],
    queryFn: getProductPeriods,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const periods =
    data?.map((period: { name: string; id: string }) => ({
      label: period?.name,
      value: period?.id,
    })) || [];

  return { periods, loadingPeriods: isLoading };
};
