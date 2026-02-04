import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { getProductInfo } from "../api";

export const useGetProductInfo = (productId: string) => {
  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["product info", productId],
    queryFn: () => getProductInfo({ productId }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const [currentImage, setCurrentImage] = useState<string | null>(null);

  useEffect(() => {
    if (data?.mainImage) {
      setCurrentImage(data?.mainImage);
    }
  }, [data]);

  return {
    data,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
    currentImage,
    setCurrentImage,
  };
};
