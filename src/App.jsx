import RoutesApp from "./RoutesApp";

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

import Footer from "./components/Footer"
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="page-wrapper">
      <HomePage/>
      {/*<RoutesApp />*/}
      <Footer/>
    </div>
  );
}

export default App;
