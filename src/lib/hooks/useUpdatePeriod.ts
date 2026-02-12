import { FormEvent, useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { updatePeriod } from "../api/period";

export const useUpdatePeriod = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState("ACTIVE");
  const [name, setName] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updatePeriod,
    onSuccess: () => {
      toast.success("Period updated successfully.");
      setOpen(false);
      setName("");
      queryClient.invalidateQueries({
        queryKey: ["all periods"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error updating period", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent, id: string) => {
    e.preventDefault();

    if (!name) {
      return toast.error("Period name is required");
    }
    mutate({ id, name, status: isActive });
  };

  return {
    open,
    setOpen,
    isActive,
    setIsActive,
    name,
    setName,
    isPending,
    handleSubmit,
  };
};
