import { useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { deleteCountry } from "../api/country";

export const useDeleteCountry = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteCountry,
    onSuccess: () => {
      toast.success("Country deleted successfully.");
      setIsOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["all countries"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error deleting country", error);
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
