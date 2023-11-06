import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";
import AnimationsPage from "../pages/AnimationsPage";
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
      { path: "/animations", element: <AnimationsPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
