import type { TCourse } from "@/features/courses/core/types";

export const COURSE_OPTIONS: TCourse[] = [
  {
    id: "e19c4706-c66f-4831-8a8d-4c150eb8a5ee",
    courseName: "Virtual Course",
    teacher: "Name",
    date: "Monday & Tuesday, March 25 & 26",
    time: "11 am - 2:30 pm",
    location: "New York City Time",
    price: "$1044 USD",
    endDate: "February 29",
  },
  {
    id: "e19c4706-c66f-4831-8a8d-4c150eb8a5e6",
    courseName: "Virtual Course",
    teacher: "Maddie",
    date: "Friday, April 19",
    time: "11 am - 6 pm",
    location: "New York City Time",
    price: "$1049 USD",
    endDate: "March 20",
  },
] as const;
