import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logout } from "../api";

import { ApiErrorResponse } from "@/lib/types";
import { clearAuthClear, readAuthCookie } from "@/lib/helpers/cookie";
import { clearUser } from "@/store/features/auth/authSlice";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { toastOption } from "@/lib/helpers/toast";

export const useLogout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const refreshToken = readAuthCookie("refreshToken");

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Logout successfully", toastOption);
      clearAuthClear("oasisAfrikUserId");
      clearAuthClear("refreshToken");
      dispatch(clearUser());
      queryClient.clear();
      router.push("/");
    },
    onError: (error: ApiErrorResponse) => {
      promiseErrorFunction(error);
    },
  });

  return { isLoggingOut: isPending, logout: () => mutate({ refreshToken }) };
};
