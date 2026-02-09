const StatusBubble = ({ status }: { status: string }) => {
  const statusStyles: Record<string, string> = {
    PENDING: "text-yellow-400 bg-yellow-50",
    ACTIVE: "text-blue-400 bg-blue-50",
    in_transit: "text-blue-400 bg-blue-50",
    REPLIED: "text-blue-400 bg-blue-50",
    unavailable: "text-orange-400 bg-orange-50",
    UNKNOWN: "text-orange-400 bg-orange-50",
    completed: "text-green-400 bg-green-50",
    APPROVED: "text-green-400 bg-green-50",
    ACCEPTED: "text-green-400 bg-green-50",
    received: "text-green-400 bg-green-50",
    verified: "text-green-400 bg-green-50",
    declined: "text-red-400 bg-red-50",
    SUSPENDED: "text-red-400 bg-red-50",
    REJECTED: "text-red-400 bg-red-50",
    DECLINED: "text-red-400 bg-red-50",
    INACTIVE: "text-yellow-400 bg-yellow-50",
    DRAFT: "text-blue-400 bg-blue-50",
    PUBLISHED: "text-green-400 bg-green-50",
    ARCHIVED: "text-yellow-400 bg-yellow-50",
    SOLD_OUT: "text-orange-400 bg-orange-50",
  };

  return (
    <div
      className={`rounded-full px-3 py-1 text-center w-32 text-sm ${
        statusStyles[status] || "text-red-400 bg-red-50"
      }`}
    >
      {status}
    </div>
  );
};

export default StatusBubble;
