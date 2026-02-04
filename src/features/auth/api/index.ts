import { axiosInstance } from "@/lib/axiosInstance";
import { LoginProps, SignUpProps, VerifyCompanyDataType } from "../types";

export const signUp = async ({
  email,
  password,
  firstName,
  lastName,
}: SignUpProps) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", {
      email,
      firstName,
      lastName,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const verifyRegistration = async ({ otp }: { otp: string }) => {
  try {
    const { data } = await axiosInstance.post(`/auth/verify-email`, {
      otp,
    });
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const resendOtp = async ({ email }: { email: string }) => {
  try {
    const { data } = await axiosInstance.post(`/auth/resend-verification`, {
      email,
    });
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const login = async ({ email, password }: LoginProps) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async ({ email }: { email: string }) => {
  try {
    const { data } = await axiosInstance.post("/auth/forgot-password", {
      email,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async ({
  token,
  password,
}: {
  token: string;
  password: string;
}) => {
  try {
    const { data } = await axiosInstance.post("/auth/reset-password", {
      token,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await axiosInstance.get("/auth/me");
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async ({ refreshToken }: { refreshToken: string }) => {
  try {
    await axiosInstance.post("/auth/logout", {
      refreshToken,
    });
  } catch (error) {
    throw error;
  }
};

export const verifyCompanyDetails = async ({
  adminName,
  companyName,
  businessRegistrationNumber,
  phoneNumber,
  companyAddress,
  companyEmail,
  validId,
  cacDocument,
  utilityDocument,
}: VerifyCompanyDataType) => {
  try {
    const formData = new FormData();
    formData.append("adminName", adminName);
    formData.append("companyName", companyName);
    formData.append("businessRegistrationNumber", businessRegistrationNumber);
    formData.append("phoneNumber", phoneNumber);
    formData.append("companyAddress", companyAddress);
    formData.append("companyEmail", companyEmail);
    formData.append("validId", validId);
    formData.append("cacDocument", cacDocument);
    formData.append("utilityDocument", utilityDocument);

    const { data } = await axiosInstance.post(
      "/verification/submit",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};
