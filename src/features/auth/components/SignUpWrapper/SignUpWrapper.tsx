import SignUpForm from "@/components/molecules/forms/SignUpForm/SignUpForm";
import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";

const SignUpWrapper = () => {
  return (
    <AuthLayout
      title="Create an account"
      description="Sign up to oasisafrik buyers and sellers platform and get connected globally"
    >
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpWrapper;
