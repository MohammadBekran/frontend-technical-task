import { create } from "zustand";
import { persist } from "zustand/middleware";

import { toast } from "@/lib/utils";

type TCourseScheduleStore = {
  savedCourses: number[];
  addCourseToSavedCoursesList: (courseId: number) => void;
};

export const useCourseScheduleStore = create(
  persist<TCourseScheduleStore>(
    (set) => ({
      savedCourses: [],
      addCourseToSavedCoursesList: (courseId) =>
        set((state) => {
          const savedCourses = state.savedCourses;

          if (!savedCourses.includes(courseId)) {
            toast.success("Course has been added to your saved courses list");

            return {
              savedCourses: [...savedCourses, courseId],
            };
          } else {
            toast.error(
              "Course already exists in your saved course schedule list"
            );
            return { savedCourses: [...savedCourses] };
          }
        }),
    }),
    {
      name: "saved-courses",
    }
  )
);
