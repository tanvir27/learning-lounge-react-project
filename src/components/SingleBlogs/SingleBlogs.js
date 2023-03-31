import React from "react";
import "./SingleBlogs.css";

const SingleBlogs = ({ blog, handleReadTime }) => {
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
      <h1 className="m-2">{blog.blog_title}</h1>
      <div className="d-flex justify-content-around">
        <p className="">Read Time: {blog.read_time} min read</p>
        <p className=""></p>
      </div>

      <p
        onClick={()=>handleReadTime(blog.read_time)}
        className="text-start text-decoration-underline fw-bold text-primary btn-style"
      >
        Mark as Read
      </p>
    </div>
  );
};

export default SingleBlogs;
