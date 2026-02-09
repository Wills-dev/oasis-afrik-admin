import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/atoms/StatisticCard/StatisticCard";

import { ShieldCheck, Clock, XCircle, CheckCircle } from "lucide-react";

const VerificationRequestSummary = ({
  total,
  pending,
  rejected,
  accepted,
  isLoading,
  onClick,
}: {
  total: number;
  pending: number;
  rejected: number;
  accepted: number;
  isLoading: boolean;
  onClick: (value: string) => void;
}) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total Requests"
        value={total || 0}
        icon={<ShieldCheck />}
        color="blue"
        onClick={() => onClick("")}
      />

      <StatisticCard
        title="Pending Requests"
        value={pending || 0}
        icon={<Clock />}
        color="yellow"
        onClick={() => onClick("PENDING")}
      />

      <StatisticCard
        title="Approved Requests"
        value={accepted || 0}
        icon={<CheckCircle />}
        color="green"
        onClick={() => onClick("APPROVED")}
      />

      <StatisticCard
        title="Rejected Requests"
        value={rejected || 0}
        icon={<XCircle />}
        color="red"
        onClick={() => onClick("REJECTED")}
      />
    </CardWrapper>
  );
};

export default VerificationRequestSummary;
