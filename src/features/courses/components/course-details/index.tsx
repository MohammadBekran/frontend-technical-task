import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { useCourseScheduleStore } from "@/features/courses/core/hooks";
import CourseOptionCard from "@/features/courses/components/course-details/course-option-card";

import { Button } from "@/components/ui/button";
import { COURSE_SCHEDULES, ROUTES } from "@/core/constants";
import type { TCourseSchedule } from "@/core/types";

const CourseDetails: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<TCourseSchedule>(
    {} as TCourseSchedule
  );
  const params = useParams();
  const navigate = useNavigate();
  const {
    savedCourses,
    enrolledCourses,
    addCourseToSavedCoursesList,
    addCourseToEnrolledCoursesList,
    removeFromSavedCoursesList,
    removeFromEnrolledCoursesList,
  } = useCourseScheduleStore();

  const courseId = Number(params.id);
  const course = COURSE_SCHEDULES.find(
    (courseSchedule) => courseSchedule.id === courseId
  );
  const isSaved = savedCourses.includes(courseId);
  const isEnrolled = enrolledCourses.includes(courseId);

  if (!course) {
    navigate(ROUTES.PanelCourseSchedules);

    return;
  }

  const handleSelectCourse = (course: TCourseSchedule) => {
    setSelectedCourse(course);
  };

  const handleAddCourseToSavedCourseList = () => {
    if (isSaved) {
      removeFromSavedCoursesList(courseId);
    } else {
      addCourseToSavedCoursesList(courseId);
    }
  };

  const handleEnrollCourse = () => {
    if (isEnrolled) {
      removeFromEnrolledCoursesList(courseId);
    } else {
      addCourseToEnrolledCoursesList(courseId);

      navigate(ROUTES.EnrollCourse(courseId));
    }
  };

  return (
    <div className="flex flex-col gap-y-6 rounded-2xl p-8 m-5 bg-secondary lg:w-[536px]">
      <h1 className="title-large-semibold">Course Dates</h1>
      {course.schedules.map((courseSchedule) => (
        <CourseOptionCard
          key={courseSchedule.id}
          courseSchedule={courseSchedule}
          courseName={course.name}
          selectedCourseSchedule={selectedCourse}
          onSelectCourseSchedule={handleSelectCourse}
        />
      ))}
      <Button
        className="heading-medium-bold h-12 rounded-[8px] cursor-pointer bg-primary-40 hover:bg-primary-40 !text-white"
        onClick={handleEnrollCourse}
      >
        {isEnrolled ? "Remove from enrolled list" : "Enroll in Course"}
      </Button>
      <Button
        variant="ghost"
        className="cursor-pointer"
        onClick={handleAddCourseToSavedCourseList}
      >
        <span className="body-medium-semibold !text-blue-50">
          {isSaved ? "Remove from saved list" : "Save Course"}
        </span>
      </Button>
    </div>
  );
};

export default CourseDetails;
