"use client";

import { useGetOrderInfo } from "../../hooks/useGetOrderInfo";

const OrderInfoWrapper = ({ orderId }: { orderId: string }) => {
  const { data, isLoading } = useGetOrderInfo(orderId);

  console.log("data", data);
  return <div>OrderInfoWrapper</div>;
};

export default OrderInfoWrapper;
