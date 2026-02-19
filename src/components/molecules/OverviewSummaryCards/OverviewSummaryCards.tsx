import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";

import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/atoms/StatisticCard/StatisticCard";

interface OverviewSummaryProps {
  isLoading: boolean;
  totalTransactions: number;
  activeUsers: number;
  activeProducts: number;
  receivedOrders: number;
}

const OverviewSummaryCards = ({
  isLoading,
  totalTransactions,
  activeUsers,
  activeProducts,
  receivedOrders,
}: OverviewSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total transactions"
        value={totalTransactions}
        icon={<DollarSign />}
        color="blue"
      />
      <StatisticCard
        title="Active Users"
        value={activeUsers}
        icon={<Users />}
        color="green"
      />
      <StatisticCard
        title="Received Orders"
        value={receivedOrders}
        icon={<ShoppingCart />}
        color="orange"
      />

      <StatisticCard
        title="Active Products"
        value={activeProducts}
        icon={<Package />}
        color="purple"
      />
    </CardWrapper>
  );
};

export default OverviewSummaryCards;
