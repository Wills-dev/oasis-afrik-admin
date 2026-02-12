import { FormEvent, useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postCategory } from "../api/category";
import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";

export const useCreateNewCategory = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState("ACTIVE");
  const [name, setName] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: postCategory,
    onSuccess: () => {
      toast.success("Category published successfully.");
      setOpen(false);
      setName("");
      queryClient.invalidateQueries({
        queryKey: ["all categories"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error posting new category", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name) {
      return toast.error("Category name is required");
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
