import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import NewsDetails from "@/features/insights/components/NewsDetails/NewsDetails";

const InsightInfoPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <DashboardLayout title="Insight Info">
      <NewsDetails id={id} />
    </DashboardLayout>
  );
};

export default InsightInfoPage;
