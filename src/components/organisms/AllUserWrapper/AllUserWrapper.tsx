"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import UserStatSummary from "@/components/molecules/UserStatSummary/UserStatSummary";
import UsersTable from "../UsersTable/UsersTable";

import { useGetAllUsers } from "@/lib/hooks/useGetAllUsers";

const AllUserWrapper = () => {
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
  } = useGetAllUsers("USER");

  console.log("data", data);

  return (
    <div className="space-y-6">
      <PageTitle
        title="All Users"
        description="Track and monitor all user activities on the platform"
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
      />
    </div>
  );
};

export default AllUserWrapper;
