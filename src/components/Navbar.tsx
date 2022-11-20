import React from "react";
import { Link } from "react-router-dom";
// import { Col, Image, Row } from "antd";

import logo from "../static/images/logo.png";

export const Navbar: React.FC<{}> = () => {
  return (
    <div className="navbar-header">
      {/* <Row className="navbar-container">
        <Col className="logo-container">
          <Image width={300} src={logo} preview={false} />
        </Col>
        <Col className="navbar-content">
          <Row className="navbar-header-top">
            Times are shown in your local time zone (UTC+07:00)
          </Row>
          <Row className="navbar-header-bottom">
            <Link to="" className="link-container">
              about
            </Link>
            <Link to="/agenda" className="link-container">
              agenda
            </Link>
            <Link to="/sponsor" className="link-container">
              sponsor
            </Link>
            <Link to="/speaker" className="link-container">
              speaker
            </Link>
          </Row>
        </Col>
      </Row> */}
    </div>
  );
};

export default Navbar;
