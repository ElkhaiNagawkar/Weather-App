import React from "react";

export default function Detailes(props) {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="grid grid-cols-2 grid-rows-1 gap-x-20">
        <div className="flex">
          <img src="../svgs/Thermometer.svg" alt="" className="h-24" />
          <div className="container flex flex-col justify-center items-center text-2xl font-bold">
            <h1 className="text-3xl">{Math.round(props?.info?.feels_like)}°</h1>
            <h1>Feels Like</h1>
          </div>
        </div>
        <div className="flex">
          <img src="../svgs/Humidity.svg" alt="" className="h-24" />
          <div className="container flex flex-col justify-center items-center text-2xl font-bold">
            <h1 className="text-3xl">{props?.info?.humidity}%</h1>
            <h1>Humidity</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
