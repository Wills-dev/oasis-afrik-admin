import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import AllAdminWrapper from "@/components/organisms/AllAdminWrapper/AllAdminWrapper";

const AllAdminsPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <DashboardLayout title="All Users">
        <AllAdminWrapper />
      </DashboardLayout>
    </Suspense>
  );
};

export default AllAdminsPage;
