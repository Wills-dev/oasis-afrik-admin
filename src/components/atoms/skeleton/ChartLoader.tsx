import { Skeleton } from "@/components/ui/skeleton";

const ChartLoader = () => {
  return (
    <Skeleton className="h-96 w-full rounded-2xl bg-gray-300 dark:bg-gray-700" />
  );
};

export default ChartLoader;
