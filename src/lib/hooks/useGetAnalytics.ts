import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { getAnalytics } from "../api/analytics";

export const useGetAnalytics = () => {
  const [period, setPeriod] = useState("daily");

  const { data, isLoading, error } = useQuery({
    queryKey: ["analytics", period],
    queryFn: () => getAnalytics({ period }),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });

  const handlePeriodChange = (newPeriod: string) => {
    setPeriod(newPeriod);
  };

  return {
    error,
    data,
    isLoading,
    period,
    handlePeriodChange,
  };
};
