import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";
import HolidayPage from "../pages/HolidayPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";

export const config = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/gallery", element: <GalleryPage /> },
      { path: "/holiday", element: <HolidayPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
