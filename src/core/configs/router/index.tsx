import { createBrowserRouter } from "react-router";

import { ROUTES } from "@/core/constants";
import CourseDetailsPage from "@/pages/courses/course-details";

const router = createBrowserRouter([
  {
    path: ROUTES.CourseDetails,
    element: <CourseDetailsPage />,
  },
]);

export default router;
