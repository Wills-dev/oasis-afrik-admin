import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updatePaymentProof } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useUpdatePaymentProof = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updatePaymentProof,
    onSuccess: (data, variables) => {
      toast.success("Payment status updated successfully!", toastOption);

      queryClient.invalidateQueries({
        queryKey: ["all orders"],
      });
      queryClient.invalidateQueries({
        queryKey: ["order info", variables.orderId],
      });
    },
    onError: (error: ApiErrorResponse) => {
      promiseErrorFunction(error);
    },
  });

  const handleUpdatePayment = (id: string, status: boolean) => {
    if (status === null) {
      return;
    }
    mutate({ orderId: id, status });
  };

  return {
    open,
    setOpen,
    openModal,
    setOpenModal,
    handleUpdatePayment,
    isSubmitting: isPending,
  };
};
