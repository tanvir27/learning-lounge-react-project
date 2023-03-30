import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import SideCart from "./components/SideCart/SideCart";
import Home from "./components/Home/Home";
function App() {
  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div className="container m-auto main row ">
        <div className="home-container m-0  col-md-8 ">
          <Home></Home>
        </div>
        <div className=" sideCart-container m-0  col-md-4 ">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  );

}

export default App;
