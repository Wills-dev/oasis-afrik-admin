import ResetPasswordForm from "@/components/molecules/forms/ResetPasswordForm/ResetPasswordForm";
import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";

const ResetPasswordWrapper = () => {
  return (
    <AuthLayout
      title="Reset Password"
      description="Enter a new password different from the previous"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordWrapper;
