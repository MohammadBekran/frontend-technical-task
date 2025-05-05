import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { TCourseSchedule } from "@/core/types";

export const COURSE_SCHEDULE_COLUMN = (
  onSaveCourse: (courseId: number) => void,
  onEnrollCourse: (courseId: number) => void,
  onRemoveCourseFromSavedCoursesList: (courseId: number) => void,
  onRemoveCourseFromEnrolledCoursesList: (courseId: number) => void,
  savedCourses: number[],
  enrolledCourses: number[]
): ColumnDef<TCourseSchedule>[] =>
  [
    {
      cell: ({ row }) => {
        const original = row.original;

        return <span>{original.instructors[0].first_name}</span>;
      },
      header: "Instructor",
    },
    {
      accessorKey: "location.timezone",
      header: "Location",
    },
    {
      accessorKey: "pricing.amount",
      header: "Amount",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const { id } = row.original;

        const isSaved = savedCourses.includes(id);
        const isEnrolled = enrolledCourses.includes(id);

        const handleSave = () =>
          isSaved ? onRemoveCourseFromSavedCoursesList(id) : onSaveCourse(id);
        const handleEnroll = () => {
          isEnrolled
            ? onRemoveCourseFromEnrolledCoursesList(id)
            : onEnrollCourse(id);
        };

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Actions</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => handleEnroll()}>
                {isEnrolled ? "Remove from enrolled list" : "Enroll in Course"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleSave()}>
                {isSaved ? "Remove from saved list" : "Save"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ] as const;
