"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import VerificationRequestSummary from "@/components/molecules/VerificationRequestSummary/VerificationRequestSummary";
import VerificationRequestTable from "../VerificationRequestTable/VerificationRequestTable";

import { useGetAllVerificationRequest } from "@/lib/hooks/useGetAllVerificationRequest";

const VerificationWrapper = () => {
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
    handleStatusChange,
    setCurrentPage,
  } = useGetAllVerificationRequest();

  return (
    <div className="space-y-6">
      <PageTitle
        title={`Verification Request`}
        description="Monitor recent company verification request"
      />
      <VerificationRequestSummary
        isLoading={isLoading}
        total={data?.stats?.total || 0}
        pending={data?.stats?.pending || 0}
        rejected={data?.stats?.rejected || 0}
        accepted={data?.stats?.approved || 0}
        onClick={handleStatusChange}
      />
      <div className="pt-10">
        <VerificationRequestTable
          data={data?.verifications || []}
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
    </div>
  );
};

export default VerificationWrapper;
