import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";

import logo from "../static/images/logo.png";
import { exportPaths } from "./utils";
import useOnClickOutside from "./utils/useOnClickOutside";

export const Navbar: React.FC<{}> = () => {
  const location = useLocation();
  const ref = React.useRef() as any;
  const [isOpen, setIsOpen] = React.useState(false);
  useOnClickOutside(ref, () => setIsOpen(false));

  const pathname = location.pathname.split("/");

  const paths = exportPaths(pathname[1]);

  return (
    <div className="nav-header-content" ref={ref}>
      <div
        className="menu-overlay"
        style={{
          left: isOpen ? "0px" : "-250px",
        }}
      >
        <div className="menu-overlay-content">
          <img src={logo} alt="logo" style={{ padding: "1rem" }} />

          <div className="menu-link-overlay">
            {paths.map((item: any) => (
              <Link
                key={item.label}
                to={item.path}
                className={item.className}
                style={{ marginTop: "12px", fontSize: "24px", fontWeight: 300 }}
                onClick={() => setIsOpen(false)}
              >
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
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </div>
      </div>

      <div ref={ref} className="navbar-header-md">
        <div ref={ref} className="navbar-container">
          <div className="logo-container">
            <img src={logo} alt="logo" />
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
