import { Link } from "react-router";

import SidebarNavigation from "@/components/partials/layouts/panel-layout/sidebar-navigation";
import Logo from "@/components/logo";

const Sidebar: React.FC = () => {
  return (
    <div className="hidden overflow-auto w-[90px] min-h-screen flex-col justify-between py-7 px-5 sm:flex lg:w-[280px] xl:w-[325px]">
      <div>
        <div className="hidden lg:block">
          <Link to="/" className="flex gap-x-2">
            <Logo width={50} height={50} fontSize={24} />
          </Link>
        </div>
        <div className="lg:hidden">
          <Link to="/" className="flex gap-x-2">
            <Logo width={50} height={50} showText={false} />
          </Link>
        </div>
        <SidebarNavigation />
      </div>
    </div>
  );
};

export default Sidebar;
