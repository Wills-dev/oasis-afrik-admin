import { useQuery } from "@tanstack/react-query";
import { getProductCategories } from "../api";

export const useGetCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getProductCategories,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const categories =
    data?.map((category: { name: string; id: string }) => ({
      label: category?.name,
      value: category?.id,
    })) || [];

  return { categories, loadingCategories: isLoading };
};
