import { File } from "lucide-react";

import type { TCourse, TSidebarNavigationItem } from "@/core/types";

export const ROUTES = {
  CourseDetails: (courseId: number | string) => `/courses/${courseId}`,
  EnrollCourse: (courseId: number | string) => `/courses/${courseId}/enroll`,
  PanelCourseSchedules: "/panel/courses/schedules",
} as const;

export const COURSE_SCHEDULES: TCourse[] = [
  {
    id: 1,
    name: "Virtual Course",
    schedules: [
      {
        id: 1,
        date: "Monday & Tuesday, March 25 & 26",
        time: "11 am - 2:30 pm",
        instructors: [
          {
            first_name: "Tim",
            last_name: "Neusesser",
            portrait_image:
              "https://media.nngroup.com/media/people/photos/Tim-portrait-2022.jpg.200x200_q75_autocrop_crop-smart_upscale.jpg",
          },
        ],
        location: {
          timezone: "New york City Time",
        },
        pricing: {
          amount: 1044,
          currency: "USD",
          valid_until: "February 29",
        },
      },
      {
        id: 2,
        date: "Friday, April 19",
        time: "11 am - 6pm",
        instructors: [
          {
            first_name: "Maddie",
            last_name: "Brown",
            portrait_image:
              "https://media.nngroup.com/media/people/photos/_DSC4827-Edit-Edit.jpg.200x200_q75_autocrop_crop-smart_upscale.jpg",
          },
        ],
        location: {
          timezone: "New York City Time",
        },
        pricing: {
          amount: 1049,
          currency: "USD",
          valid_until: "March 20",
        },
      },
    ],
  },
] as const;

export const SIDEBAR_NAVIGATION_ITEMS: TSidebarNavigationItem[] = [
  {
    icon: File,
    label: "Course Schedules",
    path: "/panel/courses/schedules",
  },
] as const;
