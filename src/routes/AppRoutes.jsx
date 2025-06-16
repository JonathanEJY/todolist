import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TaskPage from "../pages/TaskPage";

const router = createBrowserRouter([
  { index: true, element: <App /> },
  { path: "/task", element: <TaskPage /> },
]);

export default router;
