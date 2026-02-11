"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import UserStatSummary from "@/components/molecules/UserStatSummary/UserStatSummary";
import UsersTable from "../UsersTable/UsersTable";

import { useGetAllUsers } from "@/lib/hooks/useGetAllUsers";

const AllAdminWrapper = () => {
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
  } = useGetAllUsers("ADMIN");

  return (
    <div className="space-y-6">
      <PageTitle
        title="All Admins"
        description="Track and monitor all admin activities on the platform"
      />
      <UserStatSummary
        isLoading={isLoading}
        onClick={handleStatusChange}
        total={data?.stats?.total}
        active={data?.stats?.active}
        suspended={data?.stats?.suspended}
      />
      <UsersTable
        data={data?.users || []}
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
        isAdmin
      />
    </div>
  );
};

export default AllAdminWrapper;
