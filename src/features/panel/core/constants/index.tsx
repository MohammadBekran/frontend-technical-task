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
  onRedirect: (courseId: number) => void,
  onSaveCourse: (courseId: number) => void
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
              <DropdownMenuItem onClick={() => onRedirect(id)}>
                Enroll in Course
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onSaveCourse(id)}>
                Save
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ] as const;
