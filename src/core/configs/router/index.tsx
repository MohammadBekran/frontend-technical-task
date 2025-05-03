import { createBrowserRouter } from "react-router";

import CourseEnroll from "@/features/courses/components/enroll";

import PanelLayout from "@/components/partials/layouts/panel-layout/panel-layout";
import { ROUTES } from "@/core/constants";
import CourseDetailsPage from "@/pages/courses/course-details";
import PanelCourseSchedulesPage from "@/pages/panel/course-schedules";

const router = createBrowserRouter([
  {
    path: ROUTES.CourseDetails(":id"),
    element: <CourseDetailsPage />,
  },
  {
    path: ROUTES.EnrollCourse(":id"),
    element: <CourseEnroll />,
  },
  {
    path: ROUTES.PanelCourseSchedules,
    element: <PanelLayout />,
    children: [
      {
        index: true,
        element: <PanelCourseSchedulesPage />,
      },
    ],
  },
]);

export default router;
