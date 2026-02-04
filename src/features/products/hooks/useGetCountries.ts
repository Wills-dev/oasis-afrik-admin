import { useQuery } from "@tanstack/react-query";
import { getProductCountries } from "../api";

export const useGetCountries = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getProductCountries,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const countries =
    data?.map((country: { name: string; id: string }) => ({
      label: country?.name,
      value: country?.id,
    })) || [];

  return { countries, loadingCountries: isLoading };
};
