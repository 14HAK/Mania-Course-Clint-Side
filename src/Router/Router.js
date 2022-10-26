import { createBrowserRouter } from "react-router-dom";
import Signin from "../Components/Changeble/AuthFrom/Signin";
import Signup from "../Components/Changeble/AuthFrom/Signup";
import Blog from "../Components/Changeble/Blog/Blog";
import FAQ from "../Components/Changeble/FAQ/FAQ";
import CourseDetails from "../Components/Fixed/RightSection/CourseDetails";
import Courses from '../Components/Fixed/RightSection/Courses';
import HomeShow from "../Components/Fixed/RightSection/HomeShow";
import Notfound from "../Components/NotFound/Notfound";
import Layout2 from "../Layouts/Layout2";
import MainLayout from "../Layouts/MainLayout";
import PrivateCom from "../PrivateRouteComponent/PrivateCom";

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
      },
      {
        path: '/detail/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/detail/${params.id}`),
        element: <PrivateCom><CourseDetails></CourseDetails></PrivateCom>
      }
    ]
  },
  { path: '/*', element: <Notfound></Notfound> },
  {
    path: '/',
    element: <Layout2></Layout2>,
    children: [
      { path: '/faq', element: <FAQ></FAQ> },
      { path: '/blog', element: <Blog></Blog> },
      { path: '/signin', element: <Signin></Signin> },
      { path: '/signup', element: <Signup></Signup> }
    ]
  },
])

export { routes };

