import Link from "next/link";

import { Bell } from "lucide-react";

const NotificationIcon = () => {
  return (
    <Link href="/notification" className="cursor-pointer relative">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-0 right-1"></span>
      <Bell className="w-5 h-5 text-gray-600 dark:text-gray-500" />
    </Link>
  );
};

export default NotificationIcon;
