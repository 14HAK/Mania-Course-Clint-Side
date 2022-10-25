import { createBrowserRouter } from "react-router-dom";
import Notfound from "../Components/NotFound/Notfound";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      { path: '/home' }
    ]
  },
  { path: '/*', element: <Notfound></Notfound> }
])

export default router;