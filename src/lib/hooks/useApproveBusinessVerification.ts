import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { toastOption } from "../helpers/toast";
import { approveVerification } from "../api";
import { useState } from "react";

export const useApproveBusinessVerification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: approveVerification,
    onSuccess: (data, variables) => {
      toast.success("Business verified successfully!", toastOption);
      setIsOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["verification request"],
      });
      queryClient.invalidateQueries({
        queryKey: ["verification info", variables.id],
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
