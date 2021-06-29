import "./App.css";
import Home from "./Home";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  //Switch, Route, Link
} from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
//!https://unice.pixelstrapthemes.vercel.app/layouts/wedding
//!https://codepen.io/cs1342d/pen/oNXoqJG
//!https://codepen.io/NestedLooper/pen/aKdgjx
function App() {
  return (
    <div className="App">
      <Router>
        <SimpleReactLightbox>
          <Home />
        </SimpleReactLightbox>
      </Router>
    </div>
  );
}

export default App;
