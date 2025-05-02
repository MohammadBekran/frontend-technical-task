import { Link, useLocation } from "react-router";

import { SIDEBAR_NAVIGATION_ITEMS } from "@/core/constants";
import { cn } from "@/lib/utils";

const SidebarNavigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="mt-9">
      <ul className="space-y-5">
        {SIDEBAR_NAVIGATION_ITEMS.map((navigationItem) => {
          const { icon: Icon, label, path } = navigationItem;

          const isActive = pathname === path;

          return (
            <li
              key={path}
              className={cn(
                "h-[52px] flex justify-center items-center rounded-xl cursor-pointer text-light-100 lg:justify-start lg:px-[30px] lg:rounded-full h5",
                {
                  "shadow-drop-2 bg-[#FA7275] text-white": isActive,
                }
              )}
            >
              <Link to={path} className="flex gap-4">
                <Icon />
                <span className="hidden lg:block">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
