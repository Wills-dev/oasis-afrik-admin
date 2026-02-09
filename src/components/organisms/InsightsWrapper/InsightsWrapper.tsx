"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import InsightsSummary from "@/components/molecules/InsightsSummary/InsightsSummary";
import InsightsTable from "../InsightsTable/InsightsTable";
import CreateInsightActionPanel from "@/components/molecules/CreateInsightActionPanel/CreateInsightActionPanel";

import { useGetAllInsights } from "@/features/insights/hooks/useGetAllInsights";

const InsightsWrapper = () => {
  const {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    data,
    isLoading,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    setCurrentPage,
    handleStatusChange,
  } = useGetAllInsights();

  return (
    <div className="space-y-6">
      <div className="flex md:items-center justify-between flex-wrap gap-4">
        <PageTitle
          title="Insights & News"
          description="Track all news and insights posted on the platform"
        />
        <CreateInsightActionPanel />
      </div>
      <InsightsSummary
        isLoading={isLoading}
        total={data?.stats?.total || 0}
        draft={data?.stats?.draft || 0}
        published={data?.stats?.published || 0}
        onClick={handleStatusChange}
      />
      <InsightsTable
        data={data?.insights || []}
        totalPages={data?.pagination?.totalPages}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        limit={limit}
        setLimit={setLimit}
        search={search}
        handleChange={handleSearchChange}
        handleClear={handleClear}
        onSubmit={handleSearch}
        isLoading={isLoading}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default InsightsWrapper;
