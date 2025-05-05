import { create } from "zustand";
import { persist } from "zustand/middleware";

import { toast } from "@/lib/utils";
import { ELocalStorageKeys } from "@/core/enums";

type TCourseScheduleStore = {
  savedCourses: number[];
  enrolledCourses: number[];
  addCourseToSavedCoursesList: (courseId: number) => void;
  addCourseToEnrolledCoursesList: (courseId: number) => void;
  removeFromSavedCoursesList: (courseId: number) => void;
  removeFromEnrolledCoursesList: (courseId: number) => void;
};

export const useCourseScheduleStore = create(
  persist<TCourseScheduleStore>(
    (set) => ({
      savedCourses: [],
      enrolledCourses: [],
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
      addCourseToEnrolledCoursesList: (courseId) =>
        set((state) => {
          const enrolledCourses = state.enrolledCourses;

          if (!enrolledCourses.includes(courseId)) {
            toast.success(
              "Course has been added to your enrolled courses list"
            );

            return {
              enrolledCourses: [...enrolledCourses, courseId],
            };
          } else {
            toast.error(
              "Course already exists in your enrolled course schedule list"
            );
            return { enrolledCourses: [...enrolledCourses] };
          }
        }),
      removeFromSavedCoursesList: (courseId) =>
        set((state) => {
          const savedCourses = state.savedCourses;

          if (!savedCourses.includes(courseId)) {
            toast.error("Course doesn't exist in your saved courses list");

            return { savedCourses: [...savedCourses] };
          } else {
            toast.success(
              "Course has been removed from your saved courses list"
            );

            return {
              savedCourses: [
                ...savedCourses.filter((course) => course !== courseId),
              ],
            };
          }
        }),
      removeFromEnrolledCoursesList: (courseId) =>
        set((state) => {
          const enrolledCourses = state.enrolledCourses;

          if (!enrolledCourses.includes(courseId)) {
            toast.error("Course doesn't exist in your enrolled courses list");

            return { enrolledCourses: [...enrolledCourses] };
          } else {
            toast.success(
              "Course has been removed from your enrolled courses list"
            );

            return {
              enrolledCourses: [
                ...enrolledCourses.filter((course) => course !== courseId),
              ],
            };
          }
        }),
    }),
    {
      name: ELocalStorageKeys.courses,
    }
  )
);
