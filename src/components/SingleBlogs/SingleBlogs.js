import "./SingleBlogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleBlogs = ({ blog, handleReadTime, handleCountBookmark }) => {
  return (
    <div className="blog-card card mb-2 shadow p-3  bg-white rounded">
      <div className="blog-poster mb-3">
        <img
          className="img-fluid w-100 rounded"
          src={blog.cover_image}
          alt=""
        />
      </div>

      <div className="section-color d-flex justify-content-between p-1">
        <div className="author-info d-flex justify-content-between gap-2 gap-md-4">
          <div>
            <img
              className="img-fluid rounded-circle"
              src={blog.author_image}
              alt=""
            />
          </div>
          <div>
            <h5 className="fw-bold text-black">{blog.authorName}</h5>
            <p className="fw-semibold">{blog.publish_date}</p>
          </div>
        </div>

        <div>
          <span className="">{blog.read_time} min read </span>
          <span
            onClick={() => handleCountBookmark(blog, blog.id)}
            className="bookmark-style"
          >
            <FontAwesomeIcon icon={faBookmark} />
          </span>
        </div>
      </div>

      <h3 className="mb-3">{blog.blog_title}</h3>

      <div className="d-flex gap-4 fw-semibold section-color">
        <p>{blog.category_1}</p>
        <p>{blog.category_2}</p>
      </div>

      <p
        onClick={() => handleReadTime(blog.read_time)}
        className="text-start text-decoration-underline fw-bold text-primary btn-style"
      >
        Mark as Read
      </p>
    </div>
  );
};

export default SingleBlogs;
