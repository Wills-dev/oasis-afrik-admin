import { Skeleton } from "@/components/ui/skeleton";

const UserBadgeLoader = () => {
  return (
    <Skeleton className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700" />
  );
};

export default UserBadgeLoader;
