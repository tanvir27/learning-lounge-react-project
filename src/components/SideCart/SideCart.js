import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideCart.css";

const SideCart = ({title}) => {

  return (
    <div className="card mb-2 shadow p-3 bg-white rounded">
      <h6>{title.blog_title}</h6>
    </div>
  );
};

export default SideCart;
