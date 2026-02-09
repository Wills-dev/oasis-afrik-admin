import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import VerificationWrapper from "@/components/organisms/VerificationWrapper/VerificationWrapper";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

const VerificationPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <DashboardLayout title="Verification">
        <VerificationWrapper />
      </DashboardLayout>
    </Suspense>
  );
};

export default VerificationPage;
