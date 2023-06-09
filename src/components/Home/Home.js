import React, { useEffect, useState } from "react";
import SingleBlogs from "../SingleBlogs/SingleBlogs";
import SideCart from "../SideCart/SideCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [countMinute, setCountMinute] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // handle bookmarks button
  const handleCountBookmark = (blogInfo, id) => {
    // console.log('btn click');
    let count;
    if (bookmark.length > 0) {
      bookmark.forEach((item) => {
        if (item.id === id) {
          count = true;
        }
      });

      if (count) {
        toast("You Have Already Bookmarked This Blog");
      }
      const newBookmark = [...bookmark, blogInfo];
      setBookmark(newBookmark);
    } else {
      const newBookmark = [...bookmark, blogInfo];
      setBookmark(newBookmark);
    }
  };

  const handleReadTime = (readTime) => {
    // console.log(readTime);
    if (readTime) {
      const newTime = readTime + countMinute;
      setCountMinute(newTime);
    } else {
      setCountMinute(countMinute);
    }
  };

  return (
    <div className="container m-auto main row">
      <div className="blogs-container  m-0 col-md-8">
        {blogs.map((blog) => (
          <SingleBlogs
            blog={blog}
            handleReadTime={handleReadTime}
            handleCountBookmark={handleCountBookmark}
            key={blog.id}
          ></SingleBlogs>
        ))}
      </div>

      <div className="sticky-top m-0 col-md-4">
        <div className="sideCart_header mb-3">
          <p className="fs-5 fw-bold text-primary text-center my-auto py-3">
            Spent time on Read: {countMinute} min
          </p>
        </div>
        <div className="sideCart-content p-3 mb-3">
          <h5 className=" fw-bold mb-4">
            Bookmarked Blogs : {bookmark.length}
          </h5>
          {bookmark.map((title) => (
            <SideCart title={title}></SideCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
