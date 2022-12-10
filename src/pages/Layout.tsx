import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="content-layout">
        <Outlet />
      </div>
      <div className="footer">
        <div className="bg-[#032540] w-full text-white font-light p-2 sm:flex sm:flex-col text-center md:flex md:flex-row md:justify-between ">
          <p>Privacy Policy | Terms of Service</p>
          <p>Powered by Eventsider</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
