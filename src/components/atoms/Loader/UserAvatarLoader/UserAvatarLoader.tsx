import { Skeleton } from "@/components/ui/skeleton";

const UserAvatarLoader = () => {
  return (
    <Skeleton className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-gray-300" />
  );
};

export default UserAvatarLoader;
