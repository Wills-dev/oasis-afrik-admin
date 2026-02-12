import { FormEvent, useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { postPeriod } from "../api/period";

export const useAddPeriod = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState("ACTIVE");
  const [name, setName] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: postPeriod,
    onSuccess: () => {
      toast.success("Period successfully.");
      setOpen(false);
      setName("");
      queryClient.invalidateQueries({
        queryKey: ["all periods"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error adding new period", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name) {
      return toast.error("Period name is required");
    }
    mutate({ name, status: isActive });
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
