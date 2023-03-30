import React, { useEffect, useState } from 'react';
import SingleBlogs from '../SingleBlogs/SingleBlogs';

const Home = () => {
    const [blogs,setBlogs]= useState([])

    useEffect(() => {
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setBlogs(data));
    },[])

    return (
      <div>
        <div className="blogs-container ">
          {blogs.map((blog) => (
            <SingleBlogs
              blog={blog}
              
              key={blog.id}
            ></SingleBlogs>
          ))}
        </div>
      </div>
    );
};

export default Home;