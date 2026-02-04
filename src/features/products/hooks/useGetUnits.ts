import { useQuery } from "@tanstack/react-query";
import { getProductUnits } from "../api";

export const useGetUnits = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["units"],
    queryFn: getProductUnits,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const units =
    data?.map((unit: { name: string; id: string }) => ({
      label: unit?.name,
      value: unit?.id,
    })) || [];

  return { units, loadingUnits: isLoading };
};
