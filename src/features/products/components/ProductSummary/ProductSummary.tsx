import { Box, CheckCircle2, FileText, XCircle } from "lucide-react";
import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/atoms/StatisticCard/StatisticCard";

type ProductSummaryProps = {
  total: number;
  active: number;
  draft: number;
  declined: number;
  isLoading: boolean;
  onClick: (status: string) => void;
};

const ProductSummary = ({
  total,
  active,
  draft,
  declined,
  isLoading,
  onClick,
}: ProductSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total Products"
        value={total || 0}
        icon={<Box />}
        color="blue"
        onClick={() => onClick("")}
      />

      <StatisticCard
        title="Active Products"
        value={active || 0}
        icon={<CheckCircle2 />}
        color="green"
        onClick={() => onClick("ACTIVE")}
      />

      <StatisticCard
        title="Draft Products"
        value={draft || 0}
        icon={<FileText />}
        color="yellow"
        onClick={() => onClick("DRAFT")}
      />

      <StatisticCard
        title="Declined Products"
        value={declined || 0}
        icon={<XCircle />}
        color="red"
        onClick={() => onClick("DECLINED")}
      />
    </CardWrapper>
  );
};

export default ProductSummary;
