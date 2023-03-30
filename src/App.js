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
      <div className="container bg-info m-auto main row ">
        <div className=" home-container col-md-8">
          <Home></Home>
        </div>
        <div className=" sideCart-container col-md-4 card">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  );

}

export default App;
