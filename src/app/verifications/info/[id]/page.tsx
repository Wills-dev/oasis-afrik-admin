import { use } from "react";

import VerificationInfoWrapper from "@/components/organisms/VerificationInfoWrapper/VerificationInfoWrapper";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

const VerificationInfoPage = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = use(params);

  return (
    <DashboardLayout title="Verification Request Info">
      <VerificationInfoWrapper id={id} />
    </DashboardLayout>
  );
};

export default VerificationInfoPage;
