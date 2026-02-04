"use client";

import { useGetOrderInfo } from "../../hooks/useGetOrderInfo";

import BackButton from "@/components/atoms/BackButton/BackButton";
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderStatusTrack from "../OrderStatusTrack/OrderStatusTrack";

const OrderInfoWrapper = ({ orderId }: { orderId: string }) => {
  const {
    orderInfo,
    // data, isPending, isLoading, isError, error, refetch
  } = useGetOrderInfo(orderId);

  return (
    <div className="space-y-6">
      <BackButton />
      <OrderDetails
        seller={orderInfo?.seller}
        buyer={orderInfo?.buyer}
        address={orderInfo?.addrees}
        isUserBuyer
      />
      <OrderStatusTrack status={orderInfo?.status} isUserBuyer={false} />
    </div>
  );
};

export default OrderInfoWrapper;
