import { Package, ShoppingCart, Users } from "lucide-react";

import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/atoms/StatisticCard/StatisticCard";

interface OverviewSummaryProps {
  isLoading: boolean;
  totalOrders: number;
  totalUsers?: number;
  totalProducts?: number;
}

const OverviewSummaryCards = ({
  isLoading,
  totalOrders,
  totalUsers,
  totalProducts,
}: OverviewSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total transactions"
        value={totalOrders}
        icon={<ShoppingCart />}
        color="blue"
      />
      <StatisticCard
        title="Active Users"
        value={totalUsers || 0}
        icon={<Users />}
        color="green"
      />
      <StatisticCard
        title="Refferrals"
        value={totalProducts || 0}
        icon={<Package />}
        color="purple"
      />
    </CardWrapper>
  );
};

export default OverviewSummaryCards;
