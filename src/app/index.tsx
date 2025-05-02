import { RouterProvider } from "react-router";

import { Toaster } from "@/components/ui/sonner";
import router from "@/core/configs/router";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
