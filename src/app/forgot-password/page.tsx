import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";
import ForgotPasswordWrapper from "@/features/auth/components/ForgotPasswordWrapper/ForgotPasswordWrapper";

const page = () => {
  return (
    <AuthLayout
      title="Forgot Password? 🔒"
      description="Enter your email and we'll send you instructions to reset your password"
    >
      <ForgotPasswordWrapper />
    </AuthLayout>
  );
};

export default page;
