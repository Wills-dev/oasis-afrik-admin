import { useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { deletePeriod } from "../api/period";

export const useDeletePeriod = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deletePeriod,
    onSuccess: () => {
      toast.success("Period deleted successfully.");
      setIsOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["all periods"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error deleting period", error);
      promiseErrorFunction(error);
    },
  });

  const handleDelete = (id: string) => {
    mutate({ id });
  };

  return {
    isOpen,
    setIsOpen,
    isPending,
    handleDelete,
  };
};
