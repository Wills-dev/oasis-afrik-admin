import { useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "../types";
import { deleteCurrency } from "../api/currency";
import { promiseErrorFunction } from "../helpers/promiseError";

export const useDeleteCurrency = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteCurrency,
    onSuccess: () => {
      toast.success("Currency deleted successfully.");
      setIsOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["all currencies"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error deleting currency", error);
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
