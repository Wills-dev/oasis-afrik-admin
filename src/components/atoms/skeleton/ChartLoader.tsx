import { Skeleton } from "@/components/ui/skeleton";

const ChartLoader = ({ maxWidth }: { maxWidth?: string }) => {
  return (
    <Skeleton
      className={`h-96 w-full flex-1 rounded-2xl bg-gray-300 dark:bg-gray-700 ${maxWidth}`}
    />
  );
};

export default ChartLoader;
