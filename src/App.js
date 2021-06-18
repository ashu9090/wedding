import "./App.css";
import Home from "./Home";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  //Switch, Route, Link
} from "react-router-dom";
//!https://unice.pixelstrapthemes.vercel.app/layouts/wedding
//!https://codepen.io/cs1342d/pen/oNXoqJG
function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
