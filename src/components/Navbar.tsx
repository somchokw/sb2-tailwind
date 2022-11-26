import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";

import logo from "../static/images/logo.png";
import { exportPaths } from "./utils";
import useOnClickOutside from "./utils/useOnClickOutside";

export const Navbar: React.FC<{}> = () => {
  const location = useLocation();
  const ref = React.useRef() as any;
  const [isOpen, setOpen] = React.useState(false);
  const [isModalOpen, setModalOpen] = React.useState(false);

  useOnClickOutside(ref, () => setOpen(false));

  const paths = exportPaths(location.pathname);

  return (
    <div className="nav-header-content">
      <div
        ref={ref}
        className="menu-overlay"
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <div className="menu-overlay-content">
          <div className="menu-link-overlay">
            {paths.map((item: any) => (
              <Link key={item.label} to={item.path} className={item.className}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="navbar-header-sm">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div ref={ref}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
      </div>

      <div className="navbar-header-md">
        <div className="navbar-container">
          <div className="logo-container">
            <img width={300} src={logo} alt="logo" />
          </div>
          <div className="navbar-content">
            <div className="navbar-header-top">
              Times are shown in your local time zone (UTC+07:00)
            </div>
            <div className="navbar-header-bottom">
              {paths.map((item: any) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={item.className}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
