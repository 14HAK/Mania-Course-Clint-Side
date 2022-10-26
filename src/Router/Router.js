import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Changeble/Blog/Blog";
import FAQ from "../Components/Changeble/FAQ/FAQ";
import Courses from '../Components/Fixed/RightSection/Courses';
import HomeShow from "../Components/Fixed/RightSection/HomeShow";
import Notfound from "../Components/NotFound/Notfound";
import Layout2 from "../Layouts/Layout2";
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
  { path: '/*', element: <Notfound></Notfound> },
  {
    path: '/',
    element: <Layout2></Layout2>,
    children: [
      { path: '/faq', element: <FAQ></FAQ> },
      { path: '/blog', element: <Blog></Blog> }
    ]

  }
])

export { routes };

