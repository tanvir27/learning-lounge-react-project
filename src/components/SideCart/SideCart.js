import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideCart.css";

const SideCart = () => {
  return (
    <div className="">
      <div className="sideCart_header mb-3">
        <p className="fs-5 fw-bold text-primary text-center my-auto py-3">
          Spent time on Read: {0} min
        </p>
      </div>
      <div className="sideCart-content p-3">
        <h5 className=" fw-bold">Bookmarked Blogs : {0}</h5>
      </div>
    </div>
  );
};

export default SideCart;
