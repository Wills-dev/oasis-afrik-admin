import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { toastOption } from "@/lib/helpers/toast";
import { approveProduct } from "../api";

export const useApproveProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: approveProduct,
    onSuccess: (data, variables) => {
      toast.success("Product approve successfully!", toastOption);
      setIsOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["all products"],
      });
      queryClient.invalidateQueries({
        queryKey: ["product info", variables.id],
      });
    },
    onError: (error: ApiErrorResponse) => {
      promiseErrorFunction(error);
    },
  });

  const handleApprove = (id: string) => {
    mutate({ id });
  };

  return {
    handleApprove,
    isPending,
    isOpen,
    setIsOpen,
  };
};
