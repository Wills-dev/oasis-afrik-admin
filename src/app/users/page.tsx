import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import AllUserWrapper from "@/components/organisms/AllUserWrapper/AllUserWrapper";

const AllUsersPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <DashboardLayout title="All Users">
        <AllUserWrapper />
      </DashboardLayout>
    </Suspense>
  );
};

export default AllUsersPage;
