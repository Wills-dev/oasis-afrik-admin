import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/atoms/StatisticCard/StatisticCard";

import { CheckCircle, Clock, ShieldCheck } from "lucide-react";

const InsightsSummary = ({
  total,
  published,
  draft,
  isLoading,
  onClick,
}: {
  total: number;
  published: number;
  draft: number;
  isLoading: boolean;
  onClick: (value: string) => void;
}) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total Insights"
        value={total || 0}
        icon={<ShieldCheck />}
        color="blue"
        onClick={() => onClick("")}
      />

      <StatisticCard
        title="Published Insights"
        value={published || 0}
        icon={<CheckCircle />}
        color="green"
        onClick={() => onClick("true")}
      />

      <StatisticCard
        title="Draft Insights"
        value={draft || 0}
        icon={<Clock />}
        color="yellow"
        onClick={() => onClick("false")}
      />
    </CardWrapper>
  );
};

export default InsightsSummary;
