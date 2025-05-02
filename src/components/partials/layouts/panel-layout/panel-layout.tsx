import { Outlet } from "react-router";

import MobileNavigation from "@/components/partials/layouts/panel-layout/mobile-navigation";
import Sidebar from "@/components/partials/layouts/panel-layout/sidebar";

const PanelLayout: React.FC = () => {
  return (
    <main className="min-h-screen sm:flex">
      <div>
        <Sidebar />
        <MobileNavigation />
      </div>
      <div className="size-full">
        <div className="overflow-auto h-full flex-1 px-5 py-7 bg-light-400 mt-9 bg-[#5b5b5b0f] sm:rounded-[30px] sm:mr-7 md:mb-7 md:px-9 md:py-10">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default PanelLayout;
