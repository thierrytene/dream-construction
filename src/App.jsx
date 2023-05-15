import { BrowserRouter } from "react-router-dom";
import RouteApp from "./RouteApp";

// import CSS
import "./assets/css/font-awesome.min.css";
import "./assets/css/themify-icons.css";
import "./assets/css/flaticon.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/owl.theme.css";
import "./assets/css/slick.css";
import "./assets/css/slick-theme.css";
import "./assets/css/swiper.min.css";
import "./assets/css/owl.transitions.css";
import "./assets/css/jquery.fancybox.css";
import "./assets/css/odometer-theme-default.css";
import "./assets/css/style.css";

//import Pages
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </div>
  );
};

export default App;
