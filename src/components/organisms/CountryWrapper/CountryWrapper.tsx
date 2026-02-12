"use client";

import ConfigurationSummary from "@/components/molecules/ConfigurationSummary/ConfigurationSummary";
import CountryTable from "../CountryTable/CountryTable";
import CountryActionPanel from "@/components/molecules/CountryActionPanel/CountryActionPanel";

import { useGetAllCountries } from "@/lib/hooks/useGetAllCountries";

const CountryWrapper = () => {
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
  } = useGetAllCountries();

  return (
    <div className="space-y-6">
      <ConfigurationSummary
        isLoading={isLoading}
        onClick={handleStatusChange}
        total={data?.stats?.total}
        active={data?.stats?.active}
        inactive={data?.stats?.inactive}
      />
      <CountryActionPanel />
      <CountryTable
        data={data?.data || []}
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

export default CountryWrapper;
