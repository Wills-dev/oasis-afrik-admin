import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";
import LoginWrapper from "@/features/auth/components/LoginWrapper/LoginWrapper";

const page = () => {
  return (
    <AuthLayout
      title="Welcome to OasisAfrik Admin!"
      description="Please sign-in to your account"
    >
      <LoginWrapper />
    </AuthLayout>
  );
};

export default page;
