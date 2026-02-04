import Image from "next/image";

interface EmptyStateProps {
  description: string;
  icon?: string;
}

const EmptyState = ({
  description = "Nothing here!",
  icon = "/assets/images/10.svg",
}: EmptyStateProps) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-center items-center max-w-md flex-col">
        <Image
          src={icon}
          alt="empty-state_image"
          width={101}
          height={120}
          className="object-obtain"
        />
        <p className="text-center sm:text-lg font-medium text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
