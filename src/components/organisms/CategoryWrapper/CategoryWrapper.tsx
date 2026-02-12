"use client";

import ConfigurationSummary from "@/components/molecules/ConfigurationSummary/ConfigurationSummary";
import { useGetCategories } from "@/lib/hooks/useGetCategories";
import CatgoryTable from "../CatgoryTable/CatgoryTable";
import CategoryActionPanel from "@/components/molecules/CategoryActionPanel/CategoryActionPanel";

const CategoryWrapper = () => {
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
  } = useGetCategories();

  return (
    <div className="space-y-6">
      <ConfigurationSummary
        isLoading={isLoading}
        onClick={handleStatusChange}
        total={data?.stats?.total}
        active={data?.stats?.active}
        inactive={data?.stats?.inactive}
      />
      <CategoryActionPanel />
      <CatgoryTable
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

export default CategoryWrapper;
