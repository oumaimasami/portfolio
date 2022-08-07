import React from "react";
import "./Candle.css";
export default function Candle() {
  return (
    <div class="wrapper">
      <div class="candles">
        <div class="light__wave"></div>
        <div class="candle1">
          <div class="candle1__body">
            <div class="candle1__eyes">
              <span class="candle1__eyes-one"></span>
              <span class="candle1__eyes-two"></span>
            </div>
            <div class="candle1__mouth"></div>
          </div>
          <div class="candle1__stick"></div>
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
