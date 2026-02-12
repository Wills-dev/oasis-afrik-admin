"use client";

import { useGetAllCurrencies } from "@/lib/hooks/useGetAllCurrencies";

import ConfigurationSummary from "@/components/molecules/ConfigurationSummary/ConfigurationSummary";
import CurrencyActionPanel from "../CurrencyActionPanel/CurrencyActionPanel";
import CurrencyTable from "@/components/organisms/CurrencyTable/CurrencyTable";

const CurrenciesWrapper = () => {
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
  } = useGetAllCurrencies();

  return (
    <div className="space-y-6">
      <ConfigurationSummary
        isLoading={isLoading}
        onClick={handleStatusChange}
        total={data?.stats?.total}
        active={data?.stats?.active}
        inactive={data?.stats?.inactive}
      />
      <CurrencyActionPanel />

      <CurrencyTable
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

export default CurrenciesWrapper;
