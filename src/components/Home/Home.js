import React, { useEffect, useState } from "react";
import SingleBlogs from "../SingleBlogs/SingleBlogs";
import SideCart from "../SideCart/SideCart";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [countMinute, setCountMinute] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleCountBookmark = (blogInfo) => {
    console.log("counted", blogInfo);
    const newBookmark = [...bookmark, blogInfo];
    setBookmark(newBookmark);
  };

  const handleReadTime = (readTime) => {
    console.log(readTime);
    if (readTime) {
      const newTime = readTime+countMinute; ; 
      setCountMinute(newTime);
    }
    else {
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

      <div className=" m-0 col-md-4">
        <div className="sideCart_header mb-3">
          <p className="fs-5 fw-bold text-primary text-center my-auto py-3">
            Spent time on Read: {0} min
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
