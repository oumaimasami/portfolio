import React, { useState } from "react";
import "./hireme.css";
import image from "../images/1.png";
import image1 from "../images/2.png";
export default function HireMe() {
  const [clicked, setclicked] = useState(false);
  return (
    <div className="container hire">
      <div className="row mt-3 pt-3 justify-content-center">
        <div className="col-lg-4 col-md-12 col-sm-12">
          {clicked ? (
            <img className="hire-image1" src={image1} alt="." />
          ) : (
            <img className="hire-image" src={image} alt="." />
          )}
        </div>
        <form className=" col-lg-8 col-md-12 col-sm-12 text-center">
          <div className="row pl-4 form-group mt-5 pt-5 pb-4">
            <input
              type="email"
              className="form-control col-lg-11 col-md-12 col-sm-12  mt-3"
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
