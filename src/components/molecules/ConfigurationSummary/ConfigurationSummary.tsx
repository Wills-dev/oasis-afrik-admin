import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/atoms/StatisticCard/StatisticCard";

import { CheckCircle, Clock, ShieldCheck } from "lucide-react";

const ConfigurationSummary = ({
  total,
  active,
  inactive,
  isLoading,
  onClick,
}: {
  total: number;
  active: number;
  inactive: number;
  isLoading: boolean;
  onClick: (value: string) => void;
}) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total"
        value={total || 0}
        icon={<ShieldCheck />}
        color="blue"
        onClick={() => onClick("")}
      />

      <StatisticCard
        title="Active"
        value={active || 0}
        icon={<CheckCircle />}
        color="green"
        onClick={() => onClick("ACTIVE")}
      />

      <StatisticCard
        title="Inactive"
        value={inactive || 0}
        icon={<Clock />}
        color="yellow"
        onClick={() => onClick("INACTIVE")}
      />
    </CardWrapper>
  );
};

export default ConfigurationSummary;
