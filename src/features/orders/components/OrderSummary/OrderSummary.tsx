import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/atoms/StatisticCard/StatisticCard";

import { CheckCircle, Clock, ShoppingCart } from "lucide-react";

type OrderSummaryProps = {
  total: number;
  pending: number;
  paid: number;
  isLoading: boolean;
  onClick: (status: string) => void;
};

const OrderSummary = ({
  total,
  pending,
  paid,
  isLoading,
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
        title="Paid Orders"
        value={paid || 0}
        icon={<CheckCircle />}
        color="green"
        onClick={() => onClick("PAID")}
      />
    </CardWrapper>
  );
};

export default OrderSummary;
