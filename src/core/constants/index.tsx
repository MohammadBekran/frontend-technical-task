import { File } from "lucide-react";

import type { TCourseSchedule, TSidebarNavigationItem } from "@/core/types";

export const ROUTES = {
  CourseDetails: (courseId: number | string) => `/courses/${courseId}`,
  EnrollCourse: (courseId: number | string) => `/courses/${courseId}/enroll`,
  PanelCourseSchedules: "/panel/courses/schedules",
} as const;

export const COURSE_SCHEDULES: TCourseSchedule[] = [
  {
    id: 4776,
    dates: [
      [1711378800, 1711391400],
      [1711465200, 1711477800],
    ],
    instructors: [
      {
        first_name: "Tim",
        last_name: "Neusesser",
        portrait_image:
          "https://media.nngroup.com/media/people/photos/Tim-portrait-2022.jpg.200x200_q75_autocrop_crop-smart_upscale.jpg",
      },
    ],
    location: {
      timezone: "America/New_York",
    },
    pricing: {
      amount: 1044,
      currency: "USD",
      valid_until: 1709182800,
    },
  },
  {
    id: 4837,
    dates: [[1713538800, 1713564000]],
    instructors: [
      {
        first_name: "Maddie",
        last_name: "Brown",
        portrait_image:
          "https://media.nngroup.com/media/people/photos/_DSC4827-Edit-Edit.jpg.200x200_q75_autocrop_crop-smart_upscale.jpg",
      },
    ],
    location: {
      timezone: "America/New_York",
    },
    pricing: {
      amount: 1049,
      currency: "USD",
      valid_until: 1710907200,
    },
  },
] as const;

export const SIDEBAR_NAVIGATION_ITEMS: TSidebarNavigationItem[] = [
  {
    icon: File,
    label: "Course Schedules",
    path: "/panel/courses/schedules",
  },
] as const;
