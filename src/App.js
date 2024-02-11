import React from "react";
import Search from "./components/Search";
import Forecast from "./components/Forecast";

export default function App() {
  // const [city, setCity] = React.useState("London");
  // const [location, setLocation] = React.useState(null);
  // const [weatherInfo, setWeatherInfo] = React.useState(null);

  // React.useEffect(() => {
  //   fetch(
  //     `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setLocation(...data);
  //       fetch(
  //         `https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  //       )
  //         .then((res) => {
  //           return res.json();
  //         })
  //         .then((data) => {
  //           setWeatherInfo(data);
  //         });
  //     });
  // }, [city, location]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-t from-sky-500 to-teal-300">
      <div className="w-2/6 h-5/6 bg-gradient-to-t from-sky-400 to-teal-200 backdrop-filter-md shadow-md rounded-md flex flex-col ">
        <Search />
        <Forecast />
      </div>
    </div>
  );
}
