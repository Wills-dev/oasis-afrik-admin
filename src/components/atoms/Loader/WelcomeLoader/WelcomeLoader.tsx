import { Skeleton } from "@/components/ui/skeleton";

const WelcomeLoader = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="max-w-lg w-full h-11 rounded-lg bg-gray-300" />
      <Skeleton className="max-w-4xl w-full h-8 rounded-lg bg-gray-300" />
    </div>
  );
};

export default WelcomeLoader;
