import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { verifyRegistration } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useVerifyRegistration = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";

  const [otp, setOtp] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: verifyRegistration,
    onSuccess: () => {
      toast.success("Email verification successful", toastOption);
      router.push(`/login`);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error verifying email", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!otp) {
      toast.error("Please enter otp sent to your mail");
      return;
    }
    mutate({ otp });
  };

  return { otp, setOtp, isPending, handleSubmit };
};
