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
    <div className="flex items-center flex-col h-2/4">
      <h1 className="text-4xl font-bold">
        {props?.city[0] + " " + props?.city[1] === props?.state
          ? ""
          : props?.city[0]}{" "}
        {props?.state}
      </h1>
      <img
        src={`../svgs/${props?.weather}.svg`}
        alt={`${props?.weather}`}
        className="w-4/6 h-4/6"
      />
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
