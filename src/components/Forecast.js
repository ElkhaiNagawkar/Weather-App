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
          {props?.city[0] + " " + props?.city[1] === props?.state
            ? ""
            : props?.city[0]}{" "}
          {props?.state}
        </h1>
      </div>
      <div className="flex items-center justify-center w-full h-72">
        <img
          src={`../svgs/${props?.weather}.svg`}
          alt={`${props?.weather}`}
          className="w-4/6 h-screen"
        />
      </div>
      <h2 className="text-5xl font-bold">
        {Math.round(props?.tempreture?.temp)}°
      </h2>
      <h2 className="text-4xl font-bold">
        {props.weather === "Clouds" ||
        props.weather === "Rain" ||
        props.weather === "Snow"
          ? weather
          : props.weather}
      </h2>
    </div>
  );
}
