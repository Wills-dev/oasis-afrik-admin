import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/atoms/StatisticCard/StatisticCard";

import {
  Box,
  CheckCheck,
  CheckCircle,
  CircleAlert,
  Clock,
  DollarSign,
  Euro,
  ShoppingCart,
} from "lucide-react";

type OrderSummaryProps = {
  total: number;
  pending: number;
  paid: number;
  awaitingVerification: number;
  processing: number;
  shipped: number;
  delivered: number;
  received: number;
  settled: number;
  cancelled: number;
  isLoading: boolean;

  onClick: (status: string) => void;
};

const OrderSummary = ({
  total,
  pending,
  paid,
  isLoading,
  awaitingVerification,
  processing,
  shipped,
  delivered,
  received,
  settled,
  cancelled,
  onClick,
}: OrderSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total Orders"
        value={total || 0}
        icon={<ShoppingCart />}
        color="blue"
        onClick={() => onClick("")}
      />

      <StatisticCard
        title="Pending Payment"
        value={pending || 0}
        icon={<Clock />}
        color="yellow"
        onClick={() => onClick("PENDING_PAYMENT")}
      />
      <StatisticCard
        title="Awaiting Payment confirmation"
        value={awaitingVerification || 0}
        icon={<DollarSign />}
        color="orange"
        onClick={() => onClick("AWAITING_PAYMENT_VERIFICATION")}
      />
      <StatisticCard
        title="Paid Orders"
        value={paid || 0}
        icon={<CheckCircle />}
        color="green"
        onClick={() => onClick("PAID")}
      />
      <StatisticCard
        title="Processing Orders"
        value={processing || 0}
        icon={<CheckCircle />}
        color="orange"
        onClick={() => onClick("PROCESSING")}
      />
      <StatisticCard
        title="Shipped Orders"
        value={shipped || 0}
        icon={<CheckCircle />}
        color="purple"
        onClick={() => onClick("SHIPPED")}
      />
      <StatisticCard
        title="Delivered Orders"
        value={delivered || 0}
        icon={<CheckCheck />}
        color="blue"
        onClick={() => onClick("DELIVERED")}
      />
      <StatisticCard
        title="Received Orders"
        value={received || 0}
        icon={<Box />}
        color="green"
        onClick={() => onClick("RECEIVED")}
      />
      <StatisticCard
        title="Settled Orders"
        value={settled || 0}
        icon={<Euro />}
        color="green"
        onClick={() => onClick("SETTLED")}
      />
      <StatisticCard
        title="Cancelled Orders"
        value={cancelled || 0}
        icon={<CircleAlert />}
        color="red"
        onClick={() => onClick("CANCELLED")}
      />
    </CardWrapper>
  );
};

export default OrderSummary;
