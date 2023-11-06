import Navigation from "../components/Navigation";
import MenuNavigation from "../components/MenuNavigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


const RootLayout = () => {
  return (<>
    <>
      <MenuNavigation />
      <Navigation />
    </>
    <Outlet />
    <Footer />
  </>);
}

export default RootLayout;