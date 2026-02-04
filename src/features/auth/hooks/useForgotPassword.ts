import { FormEvent, useState } from "react";

import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { ApiErrorResponse } from "@/lib/types";
import { forgotPassword } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [onSuccess, setOnSucces] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      setOnSucces(true);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error forgot password", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Email is required", toastOption);
    }
    mutate({ email });
  };

  return {
    handleSubmit,
    email,
    setEmail,
    setOnSucces,
    onSuccess,
    isPending,
  };
};
