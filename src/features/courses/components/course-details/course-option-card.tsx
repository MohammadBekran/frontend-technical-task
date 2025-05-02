import type { TCourseSchedule } from "@/core/types";
import { cn, dateConverter } from "@/lib/utils";

interface ICourseOptionCardProps {
  course: TCourseSchedule;
  selectedCourse: TCourseSchedule;
  onSelectCourse: (course: TCourseSchedule) => void;
}

const CourseOptionCard = ({
  course,
  selectedCourse,
  onSelectCourse,
}: ICourseOptionCardProps) => {
  const { id, instructors, location, pricing, dates } = course;

  const isSelectedCourse = (selectedCourse?.id || null) === id;
  const startDate = new Date(dates[0][0] * 1000);
  const endDate = new Date(dates[0][0] * 1000);
  const startTimeStr = dateConverter(startDate);
  const endDateStr = dateConverter(endDate);

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
          onClick={() => onSelectCourse(course)}
        />
        <span className="heading-small-bold !text-primary-30">
          {location.timezone}
        </span>
      </div>
      <div className="flex justify-between pl-8">
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="max-w-[316px] title-small-bold">{pricing.amount}</h3>
            <h4 className="title-small-regular truncate max-w-[200px]">
              {location.timezone}
            </h4>
            <span className="body0-medium0-regular">{location.timezone}</span>
          </div>
          <span className="body-medium-regular">
            {startTimeStr} Until {endDateStr}
          </span>
        </div>
        <div className="space-y-[6px]">
          <img
            src={instructors[0].portrait_image}
            className="size-20 rounded-full"
          />
          <div className="flex flex-col items-center">
            <span className="body-medium-regular">Instructor:</span>
            <span className="body-medium-regular max-w-[60px] truncate">
              {instructors[0].first_name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOptionCard;
