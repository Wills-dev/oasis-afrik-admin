import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { toastOption } from "../helpers/toast";
import { rejectVerification } from "../api";

export const useRejectBusinessVerification = () => {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: rejectVerification,
    onSuccess: (data, variables) => {
      toast.success(
        "Business verification rejected successfully!",
        toastOption,
      );
      setShowRejectModal(false);
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
