import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/atoms/StatisticCard/StatisticCard";

import { User, UserCheck, UserLock } from "lucide-react";

const UserStatSummary = ({
  total,
  active,
  suspended,
  isLoading,
  onClick,
}: {
  total: number;
  active: number;
  suspended: number;
  isLoading: boolean;
  onClick: (value: string) => void;
}) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total Users"
        value={total || 0}
        icon={<User />}
        color="blue"
        onClick={() => onClick("")}
      />

      <StatisticCard
        title="Active Users"
        value={active || 0}
        icon={<UserCheck />}
        color="green"
        onClick={() => onClick("ACTIVE")}
      />

      <StatisticCard
        title="Suspended Users"
        value={suspended || 0}
        icon={<UserLock />}
        color="red"
        onClick={() => onClick("SUSPENDED")}
      />
    </CardWrapper>
  );
};

export default UserStatSummary;
