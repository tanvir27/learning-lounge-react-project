import React from "react";
import logo from "../../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="container navbar-light bg-light p-0">
      <nav class=" navbar mb-3 border-bottom-1px border-bottom-danger">
        <div className="container">
          <p className="navbar-brand fs-2 fw-bold">
            <i>
              {" "}
              <span className="text-primary">Learning</span>{" "}
              <span className="text-warning">Lounge</span>
            </i>
          </p>
          <img src={logo} alt="" />
        </div>
      </nav>
      <hr className="container" />
    </div>
  );
};

export default Header;
