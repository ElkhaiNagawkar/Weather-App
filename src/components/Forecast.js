import React from "react";

export default function Forecast(props) {
  let weather = props.weather;
  let otherWeather = false;

  if (props?.weather === "Clouds") {
    weather = "Cloudy";
  } else if (props?.weather === "Rain") {
    weather = "Raining";
  } else if (props?.weather === "Snow") {
    weather = "Snowing";
  } else if (props?.weather === "Fog") {
    weather = "Foggy";
  }

  if (props.weather === "Mist") {
    weather = "Drizzle";
    otherWeather = true;
  } else if (
    props.weather === "Haze" ||
    props.weather === "Dust" ||
    props.weather === "Sand" ||
    props.weather === "Ash"
  ) {
    weather = "Smoke";
    otherWeather = true;
  } else if (props.weather === "Sqaull") {
    weather = "Tornado";
    otherWeather = true;
  }

  return (
    <div className="flex items-center flex-col h-4/6">
      <div className="overflow-hidden pb-10">
        <h1 className="text-4xl font-bold animate-BottomSlide">
          {props?.city[0]}{" "}
          {props.location.state !== props?.city[0] ? props.location.state : ""}
        </h1>
      </div>
      <div className="flex items-center justify-center w-full h-72 overflow-hidden">
        <img
          src={`../svgs/${otherWeather ? weather : props?.weather}.svg`}
          alt={`${weather}`}
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
          {weather}
        </h2>
      </div>
    </div>
  );
}
