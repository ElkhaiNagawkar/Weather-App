import React from "react";

export default function Forecast(props) {
  let weather = "";

  if (props.weather === "Clouds") {
    weather = "Cloudy";
  } else if (props.weather === "Rain") {
    weather = "Raining";
  } else if (props.weather === "Snow") {
    weather = "Snowing";
  }

  return (
    <div className="flex items-center flex-col h-4/6">
      <div className="overflow-hidden pb-10">
        <h1 className="text-4xl font-bold animate-BottomSlide">
          {props?.city}
        </h1>
      </div>
      <div className="flex items-center justify-center w-full h-72 overflow-hidden">
        <img
          src={`../svgs/${props?.weather}.svg`}
          alt={`${props?.weather}`}
          className="w-4/6 h-screen animate-ImgSlide delay-500"
        />
      </div>
      <div className="overflow-hidden">
        <h2 className="text-5xl font-bold animate-BottomSlide delay-700 pb-4">
          {Math.round(props?.tempreture?.temp)}°
        </h2>
      </div>
      <div className="overflow-hidden pb-5">
        <h2 className="text-4xl font-bold animate-BottomSlide delay-700">
          {props.weather === "Clouds" ||
          props.weather === "Rain" ||
          props.weather === "Snow"
            ? weather
            : props.weather}
        </h2>
      </div>
    </div>
  );
}
