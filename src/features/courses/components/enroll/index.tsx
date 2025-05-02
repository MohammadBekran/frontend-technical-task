import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const CourseEnroll = () => {
  return (
    <div className="max-w-screen-2xl p-5">
      <Alert>
        <AlertTitle>Enrolled!</AlertTitle>
        <AlertDescription>
          Course has been enrolled successfully.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default CourseEnroll;
