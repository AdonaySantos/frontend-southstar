import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, Outlet, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    element:
    (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/password-recovery",
        element: <ForgotPassword />
      },
    ]
  },
]);

function App() {


  return (
    <>
      <RouterProvider router = {router} />
      <ToastContainer />
    </>
  )
}

export default App
