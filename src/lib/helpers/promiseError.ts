import toast from "react-hot-toast";
import { toastOption } from "./toast";
import { ApiErrorResponse } from "../types";

const isApiError = (error: unknown): error is ApiErrorResponse => {
  return typeof error === "object" && error !== null && "response" in error;
};

export const promiseErrorFunction = (error: ApiErrorResponse) => {
  if (
    error?.response?.data?.errors &&
    error?.response?.data?.errors?.length > 0 &&
    error?.response?.data?.errors[0]?.message
  ) {
    toast.error(`${error?.response?.data?.errors[0]?.message}`, toastOption);
  } else if (error?.response?.data?.message) {
    toast.error(`${error?.response?.data?.message}`, toastOption);
  } else if (error?.response?.data?.detail) {
    toast.error(`${error?.response?.data?.detail}`, toastOption);
  } else {
    return toast.error(`Internal Server Error! Contact support`, toastOption);
  }
};

export const displayError = (error: unknown): string | undefined => {
  if (error === undefined || error === null) {
    return undefined;
  }

  if (!isApiError(error)) {
    // Handle generic Error objects
    if (error instanceof Error) {
      return error.message;
    }
    return "An unexpected error occurred";
  }

  // Now TypeScript knows error is ApiErrorResponse
  if (error.response?.data?.message) {
    return error.response.data.message;
  } else if (error.response?.data?.detail) {
    return error.response.data.detail;
  } else if (
    error.response?.data?.errors &&
    error.response.data.errors.length > 0 &&
    error?.response?.data?.errors[0]?.message
  ) {
    return error.response.data.errors[0].message;
  } else {
    return "Internal Server Error! Contact support";
  }
};
