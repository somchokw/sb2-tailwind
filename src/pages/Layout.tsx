import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="content-layout">
        <Outlet />
      </div>
      {/* <div style={{ background: "black", width: "100%" }}> text</div> */}
    </>
  );
};

export default Layout;
