"use client";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SIDEBAR_NAVIGATION_ITEMS } from "@/core/constants";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";

const MobileNavigation = () => {
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header className="h-[60px] flex justify-between items-center px-5 sm:hidden">
      <Logo width={30} height={30} fontSize={20} />
      <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer size-[30px]" />
        </SheetTrigger>
        <SheetContent className="h-screen px-3 pt-0">
          <SheetTitle className="mt-4">
            <Logo width={50} height={50} fontSize={23} />
          </SheetTitle>
          <ul className="flex flex-col flex-1 gap-2">
            {SIDEBAR_NAVIGATION_ITEMS.map((navigationItem, index) => {
              const { icon: Icon, label, path } = navigationItem;

              const isActive = pathname === path;

              const handleNavigationItemClick = () => {
                setIsOpenSheet(false);

                navigate(path);
              };

              return (
                <li
                  key={`${path}-${index}`}
                  className={cn(
                    "h-[52px] flex items-center gap-4 rounded-full cursor-pointer px-6 text-light-100 lg:justify-start lg:px-[30px] lg:rounded-full h5",
                    {
                      "shadow-drop-2 bg-[#FA7275] text-white": isActive,
                    }
                  )}
                  onClick={handleNavigationItemClick}
                >
                  <Icon className="size-8" />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
