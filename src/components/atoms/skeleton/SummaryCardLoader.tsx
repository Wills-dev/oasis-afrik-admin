import { Skeleton } from "@/components/ui/skeleton";

const SummaryCardLoader = () => {
  return (
    <>
      {" "}
      <Skeleton className="h-40 min-w-[200px] rounded-xl flex-1 bg-gray-300" />
      <Skeleton className="h-40 min-w-[200px] rounded-xl flex-1 bg-gray-300" />
      <Skeleton className="h-40 min-w-[200px] rounded-xl flex-1 bg-gray-300" />
    </>
  );
};

export default SummaryCardLoader;
