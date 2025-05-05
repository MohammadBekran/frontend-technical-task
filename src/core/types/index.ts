import { LucideIcon } from "lucide-react";
import type { PropsWithChildren } from "react";

export type TPropsWithChildren = PropsWithChildren;

export type TInstructor = {
  first_name: string;
  last_name: string;
  portrait_image: string;
};

export type TLocation = {
  timezone: string;
};

export type TPricing = {
  amount: number;
  currency: string;
  valid_until: string;
};

export type TCourseSchedule = {
  id: number;
  date: string;
  time: string;
  instructors: TInstructor[];
  location: TLocation;
  pricing: TPricing;
};

export type TCourse = {
  id: number;
  name: string;
  schedules: TCourseSchedule[];
};

export type TSidebarNavigationItem = {
  icon: LucideIcon;
  label: string;
  path: string;
};
