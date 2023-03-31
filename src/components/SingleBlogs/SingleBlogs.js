import React from "react";
import "./SingleBlogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleBlogs = ({ blog, handleReadTime }) => {
  return (
    <div className="blog-card card mb-2 p-4 shadow p-3 mb-5 bg-white rounded">
      <div className="blog-poster mb-3">
        <img
          className="img-fluid w-100 rounded"
          src={blog.cover_image}
          alt=""
        />
      </div>

      <div className="section-color d-flex justify-content-between p-1">
        <div className="author-info d-flex justify-content-between gap-4">
          <div>
            <img
              className="img-fluid rounded-circle"
              src={blog.author_image}
              alt=""
            />
          </div>
          <div>
            <h5 className="fw-bold text-black">{blog.authorName}</h5>
            <p className="fw-bold">{blog.publish_date}</p>
          </div>
        </div>

        <div>
          <span className="">Read Time: {blog.read_time} min read </span>
          <span className="">
            <FontAwesomeIcon icon={faBookmark} />
          </span>
        </div>
      </div>

      <h2 className="m-1">{blog.blog_title}</h2>

      <p
        onClick={() => handleReadTime(blog.read_time)}
        className="px-2 text-start text-decoration-underline fw-bold text-primary btn-style"
      >
        Mark as Read
      </p>
    </div>
  );
};

export default SingleBlogs;
