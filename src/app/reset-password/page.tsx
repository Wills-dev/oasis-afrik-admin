import { Suspense } from "react";

import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ResetPasswordWrapper from "@/features/auth/components/ResetPasswordWrapper/ResetPasswordWrapper";

const page = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <AuthLayout
        title="Reset Password 🔒"
        description="Your new password must be different from previously used passwords"
      >
        <ResetPasswordWrapper />
      </AuthLayout>
    </Suspense>
  );
};

export default page;
