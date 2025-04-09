import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainNavbar from "../../MainPages/components/navbar/navbar";
import ClientNavbar from "../../clientPages/NavBar/NavBar";
import Footer from "../../MainPages/components/footer/footer";
import BreadcrumbNav from "../../clientPages/progressBar/ProgressBar";
import ScrollToTop from "../../MainPages/components/scrollUp/scrollUp";
import WorkerNavbar from "../../Components/Navbar/Navbar";

export default function MainPagesLayout() {
  const location = useLocation();
  const { pathname } = location;

  const getNavbar = () => {
    if (pathname === "/" || pathname.startsWith("/pages")) {
      return <MainNavbar />;
    }
    if (pathname.startsWith("/client")) {
      return (
        <>
          <ClientNavbar />
          <BreadcrumbNav />
        </>
      );
    }
    if (pathname.startsWith("/worker")) {
      return <WorkerNavbar />;
    }
    return <><MainNavbar /><ScrollToTop /></>; // Default 
  };
  return (
    <div>
      {getNavbar()}
      <Outlet />
      <Footer />
    </div>
  );
}
