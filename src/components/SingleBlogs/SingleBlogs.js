import React from "react";
import "./SingleBlogs.css";

const SingleBlogs = ({ blog }) => {
  return (
    <div className="movie-card card mb-2 ">
      <div className="movie-poster ">
        <img
          className="img-fluid w-100 rounded"
          src={blog.cover_image}
          alt=""
        />
      </div>

      <h3 className="">gfd</h3>
      <h1>{blog.blog_title}</h1>
      <div className="d-flex justify-content-around">
        <p className=""></p>
        <p className=""></p>
      </div>

      <button className="w-50 text-start">Mark as Read</button>
    </div>
  );
};

export default SingleBlogs;
