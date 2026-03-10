import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { updateOrderInfo } from "../api";

export const useUpdateOrderStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [reason, setReason] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateOrderInfo,
    onSuccess: (data, variables) => {
      toast.success("Order status updated successfully!", toastOption);
      setIsOpen(false);
      setIsOpenModal(false);
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

  const handleUpdate = (id: string, status: "CANCELLED" | "SETTLED") => {
    if (status === "CANCELLED") {
      if (!reason) {
        toast.error(
          "Please provide a reason for order cancellation.",
          toastOption,
        );
        return;
      }
    }
    mutate({ orderId: id, status, reason });
  };

  return {
    handleUpdate,
    isPending,
    isOpen,
    setIsOpen,
    reason,
    setReason,
    isOpenModal,
    setIsOpenModal,
  };
};
