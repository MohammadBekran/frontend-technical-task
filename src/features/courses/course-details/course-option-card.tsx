import type { TCourse } from "@/features/courses/core/types";
import { cn } from "@/lib/utils";

interface ICourseOptionCardProps {
  courseOption: TCourse;
  selectedCourse: TCourse;
  onSelectCourse: (course: TCourse) => void;
}

const CourseOptionCard = ({
  courseOption,
  selectedCourse,
  onSelectCourse,
}: ICourseOptionCardProps) => {
  const { id, courseName, teacher, date, time, location, price, endDate } =
    courseOption;
  const isSelectedCourse = selectedCourse.id === id;

  return (
    <div className="rounded-[8px] py-[32px] px-6 border border-natural-80">
      <div className="flex items-center gap-x-[8px]">
        <div
          className={cn(
            "size-[22px] rounded-full cursor-pointer border border-blue-50",
            {
              "bg-blue-50": isSelectedCourse,
            }
          )}
          onClick={() => onSelectCourse(courseOption)}
        />
        <span className="heading-small-bold !text-primary-30">
          {courseName}
        </span>
      </div>
      <div className="flex justify-between pl-8">
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="max-w-[316px] title-small-bold">{date}</h3>
            <h4 className="title-small-regular">{time}</h4>
            <span className="body0-medium0-regular">{location}</span>
          </div>
          <span className="body-medium-regular">
            {price} Until {endDate}
          </span>
        </div>
        <div className="space-y-[6px]">
          <img
            src="/courses/course-details/teachers/test.jpg"
            className="size-20 rounded-full"
          />
          <div className="flex flex-col items-center">
            <span className="body-medium-regular">Instructor:</span>
            <span className="body-medium-regular max-w-[60px] truncate">
              {teacher}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOptionCard;
