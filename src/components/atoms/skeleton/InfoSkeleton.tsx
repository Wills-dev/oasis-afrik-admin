import { Skeleton } from "@/components/ui/skeleton";

const InfoSkeleton = () => {
  return (
    <>
      <Skeleton className="w-full h-48 rounded-xl bg-gray-300 " />
      <Skeleton className="w-full h-80 rounded-xl bg-gray-300 " />
      <Skeleton className="w-full h-48 rounded-xl bg-gray-300 " />
    </>
  );
};

export default InfoSkeleton;
