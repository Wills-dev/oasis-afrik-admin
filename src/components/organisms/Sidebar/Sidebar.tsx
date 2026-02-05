"use client";

import NavLink from "@/components/atoms/NavLink/NavLink";

import { links } from "@/lib/constants";

interface DashboardSidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen }: DashboardSidebarProps) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-30 h-screen min-h-screen w-24 overflow-y-0 bg-[#FAFAFB] border-r border-[#EDEDED] transition-transform duration-300 py-6 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="h-full space-y-8 flex flex-col items-center pt-14">
        <div className="flex-1 h-full overflow-y-auto no-scrollbar space-y-8">
          {links?.map((tab) => {
            return (
              <div
                className="w-full flex flex-col justify-center items-center"
                key={tab?.title}
              >
                <h6 className="text-xs font-semibold uppercase text-center text-gray-800 dark:text-gray-300">
                  {tab?.title}
                </h6>
                <div className="pt-4 w-full">
                  {tab?.links?.map((link) => (
                    <NavLink
                      key={link?.name}
                      label={link?.name}
                      icon={link?.icon}
                      link={link?.link}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
