import { FormEvent } from "react";
import { useSearchParams } from "next/navigation";

import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { resendOtp } from "../api";

export const useResendOtp = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";

  const { mutate, isPending } = useMutation({
    mutationFn: resendOtp,
    onSuccess: () => {
      toast.success("Email verification successful", toastOption);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error resending otp", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({ email });
  };

  return { isPending, handleSubmit };
};
