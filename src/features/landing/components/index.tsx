import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/core/constants";

const Landing = () => {
  return (
    <div className="space-y-3 p-5">
      <h1 className="text-xl font-bold">Available Pages:</h1>
      <div className="flex gap-x-3">
        <Link to={ROUTES.CourseDetails("1")}>
          <Button className="cursor-pointer">Course Details</Button>
        </Link>
        <Link to={ROUTES.PanelCourseSchedules}>
          <Button className="cursor-pointer">Course Schedules</Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
