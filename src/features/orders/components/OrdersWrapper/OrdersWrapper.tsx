"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderTable from "../OrderTable/OrderTable";

import { useGetOrders } from "../../hooks/useGetOrders";

const OrdersWrapper = () => {
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
  } = useGetOrders();

  return (
    <div className="space-y-6">
      <PageTitle
        title="All Orders"
        description="Track all orders on the platform"
      />
      <OrderSummary
        isLoading={isLoading}
        onClick={handleStatusChange}
        total={data?.stats?.total}
        paid={data?.stats?.paid}
        pending={data?.stats?.pending}
      />
      <OrderTable
        data={data?.orders || []}
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

export default OrdersWrapper;
