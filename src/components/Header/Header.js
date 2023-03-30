import React from "react";
import logo from '../../logo.svg'
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
      <nav class="container navbar bg-body-tertiary mb-3 border-bottom-1px border-bottom-danger">
        <div className="container">
          <h1 className="navbar-brand fs-3">Knowledge with TH</h1>
          <img src={logo} alt="" />
        </div>
          </nav>
          <hr className="container" />
    </div>
  );
};

export default Header;
