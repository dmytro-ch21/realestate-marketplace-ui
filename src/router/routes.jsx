import { createBrowserRouter } from 'react-router';
import RootLayout from './RootLayout.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from '../pages/home/Home.jsx';
import Landing from '../pages/landing/Landing.jsx';
import Listing from '../pages/listing/Listing.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Layout wrapping the nested routes
    errorElement: <ErrorPage />, // Fallback for routing errors when not valid route
    children: [
      // Define individual routes for the application
      { index: true, element: <Landing /> },
      { path: '/home', element: <Home /> },
      { path: '/listings/:id', element: <Listing /> },
      { path: '/landing', element: <Landing /> },
    ],
  },
]);
