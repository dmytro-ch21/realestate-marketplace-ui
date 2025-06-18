import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "../pages/home/Home.jsx";
import Landing from "../pages/landing/Landing.jsx";
import Listing from "../pages/listing/Listing.jsx";
import Wishlist from "../pages/wishlist/Wishlist.jsx";
import SignUp from "../pages/signup/SignUp.jsx";
import Login from "../pages/login/Login.jsx";
import Profile from "../pages/profile/index.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Layout wrapping the nested routes
    errorElement: <ErrorPage />, // Fallback for routing errors when not valid route
    children: [
      // Define individual routes for the application
      { index: true, element: <Landing /> },
      { path: "/landing", element: <Landing /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/listings/:id",
        element: (
          <ProtectedRoute>
            <Listing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
