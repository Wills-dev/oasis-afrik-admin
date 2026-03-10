const StatusBubble = ({ status }: { status: string }) => {
  const statusStyles: Record<string, string> = {
    PENDING: "text-yellow-400 bg-yellow-50",
    ACTIVE: "text-blue-400 bg-blue-50",
    RECEIVED: "text-green-400 bg-green-50",
    DELIVERED: "text-blue-400 bg-blue-50",
    SETTLED: "text-green-400 bg-green-50",
    PROCESSING: "text-orange-400 bg-orange-50",
    REPLIED: "text-blue-400 bg-blue-50",
    UNKNOWN: "text-orange-400 bg-orange-50",
    APPROVED: "text-green-400 bg-green-50",
    ACCEPTED: "text-green-400 bg-green-50",
    PAID: "text-green-400 bg-green-50",
    SUSPENDED: "text-red-400 bg-red-50",
    REJECTED: "text-red-400 bg-red-50",
    DECLINED: "text-red-400 bg-red-50",
    INACTIVE: "text-yellow-400 bg-yellow-50",
    DRAFT: "text-orange-400 bg-orange-50",
    PUBLISHED: "text-green-400 bg-green-50",
    ARCHIVED: "text-yellow-400 bg-yellow-50",
    SOLD_OUT: "text-orange-400 bg-orange-50",
    PAYMENT_REVIEW: "text-orange-400 bg-orange-50",
  };

  return (
    <div
      className={`rounded-full px-3 py-1 text-center w-34 text-sm ${
        statusStyles[status] || "text-red-400 bg-red-50"
      }`}
    >
      {status}
    </div>
  );
};

export default StatusBubble;
