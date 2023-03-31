import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import SideCart from "./components/SideCart/SideCart";
import Home from "./components/Home/Home";
function App() {
  const handleReadTime = (readTime) => {
    console.log("added blogs", readTime);
  };

  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div className="container m-auto main row ">
        <div className="home-container m-0  col-md-8 ">
          <Home handleReadTime={handleReadTime}></Home>
        </div>
        <div className=" sideCart-container m-0  col-md-4 ">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  );
}

export default App;
