import React, { useState } from "react";
import "./hireme.css";
import image from "../images/1.png";
import image1 from "../images/2.png";
export default function HireMe() {
  const [clicked, setclicked] = useState(false);
  return (
    <div className="container hire mt-5" id="HireMe">
      <div className="row">
        <div className="col-4 ">
          {clicked ? (
            <img className="hire-image1" src={image1} alt="." />
          ) : (
            <img className="hire-image" src={image} alt="." />
          )}
        </div>
        <form className=" col-8 text-center">
          <div className="row ml-5 pl-5 form-group mt-5 pt-5 pb-4">
            <input
              type="email"
              className="form-control mt-3"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="btn HireButton py-2" onClick={() => setclicked(true)}>
            Hire me !
          </div>
        </form>
      </div>
    </div>
  );
}
