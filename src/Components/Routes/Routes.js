import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Attendance from '../Pages/Attendance/Attendance';
import ComingSoonHome from '../Pages/ComingSoon/ComingSoonHome';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/attendance",
        element: <Attendance></Attendance>,
      },
      {
        path: "/employees",
        element: <ComingSoonHome></ComingSoonHome>
      },
      {
        path: "/leaves",
        element: <ComingSoonHome></ComingSoonHome>
      },
      {
        path: "/expense",
        element: <ComingSoonHome></ComingSoonHome>
      },
      {
        path: "/notice",
        element: <ComingSoonHome></ComingSoonHome>
      },
      {
        path: "/department",
        element: <ComingSoonHome></ComingSoonHome>
      },
    ],
  },
]);

export default router;