import { Suspense } from "react";

import InsightsWrapper from "@/components/organisms/InsightsWrapper/InsightsWrapper";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";

const AllNewsPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <DashboardLayout title="Insights/News">
        <InsightsWrapper />
      </DashboardLayout>
    </Suspense>
  );
};

export default AllNewsPage;
