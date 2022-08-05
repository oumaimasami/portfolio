import React from "react";
import "./cantact.css";
export default function Cantact() {
  return (
    <div className="container">
      <div className=" row contact">
        <form className="col-6 card my-5">
          <div className="form-group mt-5 mb-3">
            <label className="mx-1" for="exampleFormControlInput1 pt-2">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group my-2">
            <label className="mx-1" for="exampleFormControlSelect1">
              Type of project you need for :
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Freelance</option>
              <option>Frontend (React JS)</option>
              <option>Backend (NodeJS,ExpressJS)</option>
              <option>Help :) </option>
            </select>
          </div>

          <div className="form-group my-4">
            <label className="mx-1" for="exampleFormControlTextarea1">
              Feel Free to ask :)
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Message .."
              rows="4"
            ></textarea>
          </div>
          <div className="button-contact">Send Message</div>
        </form>
        <div className="card informations col-5 my-2 pl-2">
          <h2 className="mt-5 mx-5 px-3">Cantact me</h2>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}
