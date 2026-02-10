import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { toastOption } from "@/lib/helpers/toast";
import { rejectProduct } from "../api";

export const useRejectProduct = () => {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: rejectProduct,
    onSuccess: (data, variables) => {
      toast.success("Product rejected successfully!", toastOption);
      setShowRejectModal(false);
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

  const handleReject = (id: string) => {
    mutate({ id, rejectionReason });
  };

  return {
    handleReject,
    isRejecting: isPending,
    rejectionReason,
    setRejectionReason,
    showRejectModal,
    setShowRejectModal,
  };
};
