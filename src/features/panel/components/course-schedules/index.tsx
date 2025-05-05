import { useNavigate } from "react-router";

import { COURSE_SCHEDULE_COLUMN } from "@/features/panel/core/constants";
import { useCourseScheduleStore } from "@/features/courses/core/hooks";

import { DataTable } from "@/components/date-table";
import { COURSE_SCHEDULES, ROUTES } from "@/core/constants";

const PanelCourseSchedules: React.FC = () => {
  const navigate = useNavigate();
  const {
    savedCourses,
    enrolledCourses,
    addCourseToSavedCoursesList,
    addCourseToEnrolledCoursesList,
    removeFromSavedCoursesList,
    removeFromEnrolledCoursesList,
  } = useCourseScheduleStore();

  const handleEnrollCourse = (courseId: number) => {
    addCourseToEnrolledCoursesList(courseId);

    navigate(ROUTES.EnrollCourse(courseId));
  };

  const handleRemoveCourseFromEnrolledCourse = (courseId: number) => {
    removeFromEnrolledCoursesList(courseId);
  };

  const handleSaveCourse = (courseId: number) => {
    addCourseToSavedCoursesList(courseId);
  };

  const handleRemoveCourseFromSavedCoursesList = (courseId: number) => {
    removeFromSavedCoursesList(courseId);
  };

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Course Schedules</h1>
      <DataTable
        columns={COURSE_SCHEDULE_COLUMN(
          handleSaveCourse,
          handleEnrollCourse,
          handleRemoveCourseFromSavedCoursesList,
          handleRemoveCourseFromEnrolledCourse,
          savedCourses,
          enrolledCourses
        )}
        data={COURSE_SCHEDULES[0].schedules}
      />
    </div>
  );
};

export default PanelCourseSchedules;
