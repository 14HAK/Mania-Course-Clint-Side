import { createBrowserRouter } from "react-router-dom";
import Courses from "../Components/Fixed/RightSection/Courses";
import Notfound from "../Components/NotFound/Notfound";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      { path: '/' },
      { path: '/course/:id', element: <Courses></Courses> }
    ]
  },
  { path: '/*', element: <Notfound></Notfound> }
])

export default router;