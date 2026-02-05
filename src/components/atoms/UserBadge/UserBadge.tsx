const UserBadge = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-center h-10 w-10 min-w-10 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-500">
      <span className="text-">{name.charAt(0)}</span>
    </div>
  );
};

export default UserBadge;
