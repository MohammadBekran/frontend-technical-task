import { useState } from "react";

import { Button } from "@/components/ui/button";
import { COURSE_OPTIONS } from "@/features/courses/core/constants";
import type { TCourse } from "@/features/courses/core/types";
import CourseOptionCard from "@/features/courses/course-details/course-option-card";

const CourseDetails: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<TCourse>(
    COURSE_OPTIONS[0]
  );

  const handleSelectCourse = (course: TCourse) => {
    setSelectedCourse(course);
  };

  return (
    <div className="flex flex-col gap-y-6 rounded-2xl p-8 m-5 bg-secondary lg:w-[536px]">
      <h1 className="title-large-semibold">Course Dates</h1>
      {COURSE_OPTIONS.map((courseOption) => (
        <CourseOptionCard
          courseOption={courseOption}
          selectedCourse={selectedCourse}
          onSelectCourse={handleSelectCourse}
        />
      ))}
      <Button className="heading-medium-bold h-12 rounded-[8px] cursor-pointer bg-primary-40 hover:bg-primary-40 !text-white">
        Enroll in Course
      </Button>
      <Button variant="ghost" className="cursor-pointer">
        <span className="body-medium-semibold !text-blue-50">Save Course</span>
      </Button>
    </div>
  );
};

export default CourseDetails;
