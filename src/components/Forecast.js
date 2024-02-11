import React from "react";
import Clear from "../svg's/Clear.svg";
import Clouds from "../svg's/Clouds.svg";

export default function Forecast() {
  return (
    <div className="flex items-center flex-col h-3/4">
      <h1 className="text-4xl font-bold">Clear Weather</h1>
      <img src={Clear} alt="" className="w-4/6 h-3/6" />
    </div>
  );
}
