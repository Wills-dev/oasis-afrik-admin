"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import ChartLoader from "@/components/atoms/skeleton/ChartLoader";
import AreaChartContent from "@/components/molecules/AreaChartContent/AreaChartContent";
import BarChartContent from "@/components/molecules/BarChartContent/BarChartContent";
import HorizontalBarChartContent from "@/components/molecules/HorizontalBarChartContent/HorizontalBarChartContent";
import OverviewSummaryCards from "@/components/molecules/OverviewSummaryCards/OverviewSummaryCards";
import RecentVerificationRequest from "@/components/molecules/RecentVerificationRequest/RecentVerificationRequest";
import TimeFilterDropdown from "@/components/molecules/TimeFilterDropdown/TimeFilterDropdown";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

import { useGetAnalytics } from "@/lib/hooks/useGetAnalytics";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

const OverviewPage = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  const {
    data,
    isLoading: isAnalyticsLoading,
    period,
    handlePeriodChange,
  } = useGetAnalytics();

  const isDataLoading = isLoading || isAnalyticsLoading;

  return (
    <DashboardLayout title="Overview">
      <div className="space-y-6">
        <div className="flex justify-between md:items-center gap-6 max-md:flex-col">
          <PageTitle
            title={`Welcome ${user?.firstName || "Admin"}!`}
            description="Check your performance and find tips on improvement."
          />
        </div>
        <OverviewSummaryCards
          isLoading={isDataLoading}
          activeUsers={data?.metrics.activeUsers || 0}
          receivedOrders={data?.metrics.receivedOrders || 0}
          activeProducts={data?.metrics.activeProducts || 0}
          totalTransactions={data?.metrics.totalTransactions || 0}
        />
        <div className="flex justify-end">
          <TimeFilterDropdown value={period} onChange={handlePeriodChange} />
        </div>
        <div className="flex flex-wrap gap-6">
          {isDataLoading ? (
            <>
              <ChartLoader />
              <ChartLoader />
            </>
          ) : (
            <>
              <BarChartContent userGrowth={data?.charts.userGrowth || 0} />
              <AreaChartContent
                orderOverview={data?.charts.orderOverview || []}
              />
            </>
          )}
        </div>
        <div className="flex flex-wrap gap-6">
          {isDataLoading ? (
            <ChartLoader />
          ) : (
            <HorizontalBarChartContent
              currencyBalances={data?.currencyBalances || []}
            />
          )}
          <RecentVerificationRequest
            isLoading={isDataLoading}
            recentVerifications={data?.recentVerifications || []}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OverviewPage;
