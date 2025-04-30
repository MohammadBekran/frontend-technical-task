import { RouterProvider } from "react-router";

import router from "@/core/configs/router";

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
