import "./App.css";
import About from "./components/About";
import Cantact from "./components/Cantact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import sun from "./images/sun.png";
import moon from "./images/moon.png";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";

function App() {
  const [light, setlight] = useState(false);
  const [english, setlanguage] = useState(false);
  return (
    <div className={light ? "dark" : "light"}>
      <Navbar light={light} english={english} />

      <div className="d-flex justify-content-space-between ">
        <div className="d-flex col-6 justify-content-start ">
          <input type="checkbox" id="lol-checkbox" />
          <label
            id="button"
            for="lol-checkbox"
            onClick={() => setlanguage(!english)}
          >
            <div id="knob"></div>
            <div id="subscribe">FR</div>
            <div id="alright">EN</div>
          </label>
        </div>
        <div className="d-flex col-6 justify-content-end ">
          {light ? (
            <img
              className="sun m-3"
              src={sun}
              alt="."
              onClick={() => setlight(false)}
            />
          ) : (
            <img
              className="moon m-4"
              src={moon}
              alt="."
              onClick={() => setlight(true)}
            />
          )}
        </div>
      </div>
      <Header english={english} light={light} />
      <About english={english} />
      <Projects english={english} light={light} />
      <Cantact english={english} />
      <HireMe english={english} />
      <Footer english={english} />
    </div>
  );
}
export default App;
