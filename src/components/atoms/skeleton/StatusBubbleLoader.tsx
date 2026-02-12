import { Skeleton } from "@/components/ui/skeleton";

const StatusBubbleLoader = () => {
  return (
    <Skeleton className="sm:h-12 h-10 w-20 rounded-full bg-gray-300 dark:bg-gray-700" />
  );
};

export default StatusBubbleLoader;
