"use client";

import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";
import ForgotPasswordForm from "@/components/molecules/forms/ForgotPasswordForm/ForgotPasswordForm";

const ForgotPasswordWrapper = () => {
  return (
    <AuthLayout
      title="Forgot Password"
      description="Enter your registered email to reset password"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordWrapper;
