import React from "react";

export default function Detailes(props) {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="grid grid-cols-2 grid-rows-1 gap-x-20">
        <div className="flex overflow-hidden">
          <img
            src="../svgs/Thermometer.svg"
            alt=""
            className="h-24 animate-LeftSlide delay-1000"
          />
          <div className="container flex flex-col justify-center items-center text-2xl font-bold overflow-hidden">
            <h1 className="text-3xl animate-BottomSlide delay-1000">
              {Math.round(props?.info?.feels_like)}°
            </h1>
            <h1 className="animate-BottomSlide delay-1000">Feels Like</h1>
          </div>
        </div>
        <div className="flex overflow-hidden">
          <img
            src="../svgs/Humidity.svg"
            alt=""
            className="h-24 animate-LeftSlide delay-1000"
          />
          <div className="container flex flex-col justify-center items-center text-2xl font-bold animate-BottomSlide delay-1000">
            <h1 className="text-3xl animate-BottomSlide delay-1000">
              {props?.info?.humidity}%
            </h1>
            <h1 className="animate-BottomSlide delay-1000">Humidity</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
