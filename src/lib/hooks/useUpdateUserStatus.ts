import { useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { updateUserStatus } from "../api/user";

export const useUpdateUserStatus = () => {
  const [openActivateModal, setOpenActivateModal] = useState(false);
  const [openSuspendModal, setOpenSuspendModal] = useState(false);
  const [openDeactivateModal, setOpenDeactivateModal] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateUserStatus,
    onSuccess: (data, variables) => {
      toast.success("User status updated successfully.");
      setOpenActivateModal(false);
      setOpenDeactivateModal(false);
      setOpenSuspendModal(false);
      queryClient.invalidateQueries({
        queryKey: ["all users"],
      });

      queryClient.invalidateQueries({
        queryKey: ["user info", variables?.id],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error creating admin", error);
      promiseErrorFunction(error);
    },
  });

  const handleUpdate = (id: string, status: string) => {
    mutate({ id, status });
  };

  return {
    openActivateModal,
    setOpenActivateModal,
    openSuspendModal,
    setOpenSuspendModal,
    openDeactivateModal,
    setOpenDeactivateModal,
    isPending,
    handleUpdate,
  };
};
