"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

import UserBadge from "@/components/atoms/UserBadge/UserBadge";
import UserBadgeLoader from "@/components/atoms/skeleton/UserBadgeLoader";
import NotificationIcon from "@/components/atoms/NotificationIcon/NotificationIcon";

import Logo from "@/components/atoms/Logo/Logo";

import { Menu, X } from "lucide-react";

const Navbar = ({
  title,
  isSidebarOpen,
  toggleSidebar,
}: {
  title: string;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const { isLoading } = useCurrentUser();

  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="h-14 z-40 bg-[#FAFAFB] dark:bg-gray-800 border-b border-[#EDEDED] dark:border-gray-700 fixed right-0 top-0  w-full">
      <div className="flex items-center h-full">
        <div className="w-24 border-r border-[#EDEDED] dark:border-gray-700">
          {" "}
          <div className="flex items-center justify-center">
            <Logo
              url="/overview"
              imgUrl="/assets/images/logo2.png"
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-between gap-6 h-full w-full px-4">
          <div className="items-center flex gap-2 text-gray-600 dark:text-gray-500">
            <button onClick={toggleSidebar} className="lg:hidden">
              {isSidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <h6 className="sm:text-lg whitespace-nowrap">{title}</h6>
          </div>
          <div className="flex gap-4 items-center justify-end h-full w-full">
            <NotificationIcon />
            <div className="max-sm:hidden">
              {isLoading ? (
                <UserBadgeLoader />
              ) : (
                <UserBadge name={user?.firstName || "O"} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
