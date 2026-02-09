"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import AreaChartContent from "@/components/molecules/AreaChartContent/AreaChartContent";
import BarChartContent from "@/components/molecules/BarChartContent/BarChartContent";
import HorizontalBarChartContent from "@/components/molecules/HorizontalBarChartContent/HorizontalBarChartContent";
import OverviewSummaryCards from "@/components/molecules/OverviewSummaryCards/OverviewSummaryCards";
import RecentVerificationRequest from "@/components/molecules/RecentVerificationRequest/RecentVerificationRequest";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

const OverviewPage = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  return (
    <DashboardLayout title="Overview">
      <div className="space-y-6">
        <PageTitle
          title={`Welcome ${user?.firstName}`}
          description="Check your performance and find tips on improvement."
        />
        <OverviewSummaryCards
          isLoading={isLoading}
          totalUsers={1000}
          totalOrders={55}
          totalProducts={10}
        />
        <div className="flex flex-wrap gap-6">
          <BarChartContent />
          <AreaChartContent />
        </div>
        <div className="flex flex-wrap gap-6">
          <HorizontalBarChartContent />
          <RecentVerificationRequest />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OverviewPage;
