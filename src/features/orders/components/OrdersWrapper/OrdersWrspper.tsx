"use client";

import { useState } from "react";

import { pageSelectors } from "../../constants";

import Button from "@/components/atoms/Button/Button";
import DashboardTitle from "@/components/molecules/DashboardTitle/DashboardTitle";
import PageSelector from "@/components/molecules/PageSelector/PageSelector";
import OrderCards from "../OrderCards/OrderCards";
import OrderTableWrapper from "../OrderTableWrapper/OrderTableWrapper";

const OrdersWrspper = () => {
  const [selectPage, setSelectPage] = useState("Outgoing");

  return (
    <div className="space-y-6">
      <div className="flex sm:items-center justify-between gap-6  max-sm:flex-col">
        <DashboardTitle
          title="Orders"
          description="Manage and track all your orders"
        />
        <Button href="/dashboard/orders/track" width="w-fit">
          Track order
        </Button>
      </div>
      <PageSelector
        selectPage={selectPage}
        setSelectPage={setSelectPage}
        options={pageSelectors}
      />
      <div className="pt-10">
        <OrderCards />
      </div>
      <OrderTableWrapper />
    </div>
  );
};

export default OrdersWrspper;
