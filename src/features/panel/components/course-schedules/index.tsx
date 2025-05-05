import { useNavigate } from "react-router";

import { COURSE_SCHEDULE_COLUMN } from "@/features/panel/core/constants";
import { useCourseScheduleStore } from "@/features/courses/core/hooks";

import { DataTable } from "@/components/date-table";
import { COURSE_SCHEDULES, ROUTES } from "@/core/constants";

const PanelCourseSchedules: React.FC = () => {
  const navigate = useNavigate();
  const addCourseToSavedCoursesList = useCourseScheduleStore(
    (state) => state.addCourseToSavedCoursesList
  );

  const handleRedirect = (courseId: number) => {
    navigate(ROUTES.EnrollCourse(courseId));
  };

  const handleAddCourseToSavedCourseList = (courseId: number) => {
    addCourseToSavedCoursesList(courseId);
  };

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Course Schedules</h1>
      <DataTable
        columns={COURSE_SCHEDULE_COLUMN(
          handleRedirect,
          handleAddCourseToSavedCourseList
        )}
        data={COURSE_SCHEDULES[0].schedules}
      />
    </div>
  );
};

export default PanelCourseSchedules;
