import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import WorkerNavbar from "../Components/Navbar/Navbar";
import ClientNavbar from "../clientPages/NavBar/NavBar";
import MainNavbar from "../MainPages/components/navbar/navbar";
import Footer from "../MainPages/components/footer/footer";

const Layout = () => {
  const [access, setAccess] = useState(() => localStorage.getItem("access") || "pages");

  useEffect(() => {
    const handleStorageChange = () => {
      setAccess(localStorage.getItem("access") || "pages");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    localStorage.setItem("access", access);
  }, [access]);

  const getNavbar = () => {
    switch (access) {
      case "worker":
        return <WorkerNavbar />;
      case "client":
        return <ClientNavbar />;
      default:
        return <MainNavbar />;
    }
  };

  return (
    <div className="layout">
      <div className="navbar">{getNavbar()}</div>

      <div className="mainSection">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
