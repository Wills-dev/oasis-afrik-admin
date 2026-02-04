import { useQuery } from "@tanstack/react-query";

import { getCurrencies } from "../api";

export const useGetCurrency = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["currencies"],
    queryFn: getCurrencies,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const currencies =
    data?.map((currency: { code: string; id: string }) => ({
      label: currency?.code,
      value: currency?.id,
    })) || [];

  return { currencies, loadingCurrencies: isLoading };
};
