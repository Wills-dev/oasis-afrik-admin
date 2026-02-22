"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import ProductSummary from "../ProductSummary/ProductSummary";

import { useGetAllProducts } from "../../hooks/useGetAllProducts";
import ProductTable from "../ProductTable/ProductTable";

const ProductWrapper = () => {
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
    setSelectedDateFilterValue,
  } = useGetAllProducts();

  return (
    <div className="space-y-8">
      <PageTitle
        title="All Products"
        description="Track and take action on all products on the platform"
      />
      <ProductSummary
        isLoading={isLoading}
        total={data?.stats?.total}
        draft={data?.stats?.draft}
        active={data?.stats?.active}
        declined={data?.stats?.declined}
        onClick={handleStatusChange}
      />
      <ProductTable
        data={data?.products || []}
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
        setSelectedDateFilterValue={setSelectedDateFilterValue}
      />
    </div>
  );
};

export default ProductWrapper;
