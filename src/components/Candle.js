import React from "react";
import "./Candle.css";
export default function Candle() {
  return (
    <div className="wrapper">
      <div className="candles">
        <div className="light__wave"></div>
        <div className="candle1">
          <div className="candle1__body">
            <div className="candle1__eyes">
              <span className="candle1__eyes-one"></span>
              <span className="candle1__eyes-two"></span>
            </div>
            <div className="candle1__mouth"></div>
          </div>
          <div className="candle1__stick"></div>
        </div>

        <div class="candle2">
          <div class="candle2__body">
            <div class="candle2__eyes">
              <div class="candle2__eyes-one"></div>
              <div class="candle2__eyes-two"></div>
            </div>
          </div>
          <div class="candle2__stick"></div>
        </div>
        <div class="candle2__fire"></div>
        <div class="sparkles-one"></div>
        <div class="sparkles-two"></div>
        <div class="candle__smoke-one"></div>
        <div class="candle__smoke-two"></div>
      </div>
      <div class="floor"></div>
    </div>
  );
}
