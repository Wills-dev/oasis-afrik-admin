import { Skeleton } from "@/components/ui/skeleton";

const AdminInfoLoader = () => {
  return (
    <>
      <Skeleton className="w-full h-48 rounded-xl bg-gray-300 dark:bg-gray-700" />
      <Skeleton className="w-full h-80 rounded-xl bg-gray-300 dark:bg-gray-700" />
      <Skeleton className="w-full h-48 rounded-xl bg-gray-300 dark:bg-gray-700" />
    </>
  );
};

export default AdminInfoLoader;
