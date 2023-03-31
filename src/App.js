import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import SideCart from "./components/SideCart/SideCart";
import Home from "./components/Home/Home";
import { useState } from "react";

function App() {
  // const [bookmark, setBookmark] = useState([]);
  
  //  const handleCountBookmark = (blogInfo) => {
  //    console.log("counted", blogInfo);
  //    const newBookmark = [...bookmark, blogInfo];
  //    setBookmark(newBookmark);
  //  };
  
  // const handleReadTime = (readTime) => {
  //   console.log("added blogs", readTime);
  // };

  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div>
        <Home></Home>
      </div>
      {/* <div className="container m-auto main row">
        <div className="home-container m-0 col-md-8">
          <Home
            handleReadTime={handleReadTime}
            handleCountBookmark={handleCountBookmark}
          ></Home>
        </div>
        <div className=" sideCart-container m-0 col-md-4 ">
          <SideCart bookmark={bookmark}></SideCart>
        </div>
      </div> */}
    </div>
  );
}

export default App;
