import { createBrowserRouter } from "react-router-dom";
import Courses from '../Components/Fixed/RightSection/Courses';
import HomeShow from "../Components/Fixed/RightSection/HomeShow";
import Notfound from "../Components/NotFound/Notfound";
import MainLayout from "../Layouts/MainLayout";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        loader: () => fetch('http://localhost:5000/latest/course'),
        element: <HomeShow></HomeShow>
      },
      {
        path: '/course/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
        element: <Courses></Courses>
      }
    ]
  },
  { path: '/*', element: <Notfound></Notfound> }
])

export { routes };

