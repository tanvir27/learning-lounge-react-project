import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
import BlogPage from "./components/BlogPage/BlogPage";

function App() {
  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div>
        <Home></Home>
      </div>
      {/* <div>
        <BlogPage></BlogPage>
      </div> */}
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
