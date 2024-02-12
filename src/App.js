import React from "react";
import Forecast from "./components/Forecast";
import Detailes from "./components/Detailes";
import { FaSearch } from "react-icons/fa";

export default function App() {
  const [city, setCity] = React.useState([]);
  const [location, setLocation] = React.useState(null);
  const [weatherInfo, setWeatherInfo] = React.useState(null);
  const [weatherData, setWeatherData] = React.useState(null);

  function handleClick(e) {
    e.preventDefault();
    const temp = document.querySelector(".searchBox").value;
    setCity(temp.split(" "));
  }

  console.log(city);

  React.useEffect(() => {
    if (city.length === 1) {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city[0]}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.cod !== "400") {
            setLocation(...data);
          }
        });
    }

    if (city.length === 2) {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city[0]},${city[1]}}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.cod !== "400") {
            setLocation(...data);
          }
        });
    }

    if (city.length === 3) {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city[0]},${city[1]},${city[2]}}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.cod !== "400") {
            setLocation(...data);
          }
        });
    }
  }, [city]);

  React.useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWeatherData(data.weather ? { ...data.weather[0] } : {});
        setWeatherInfo(data);
      });
  }, [location]);

  console.log(weatherInfo);
  // name, state, temp, feels_like, humidity, weather[0].main (the forcast (Clear, rainy)) temp_max temp_min

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-t from-sky-500 to-teal-300">
      <div className="w-2/6 h-5/6 bg-gradient-to-t from-sky-400 to-teal-200 backdrop-filter-md shadow-md rounded-md flex flex-col ">
        <div className="flex items-center justify-around h-1/5">
          <input
            type="text"
            placeholder="Enter"
            className="searchBox w-9/12 h-2/6 rounded-full placeholder:text-center  placeholder:text-xl placeholder:text-black bg-white opacity-80 text-center text-xl focus:placeholder:opacity-0 border-2 border-gray-400 outline-none"
          />
          <button
            className="w-1/12 h-2/6 bg-white opacity-80 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-700"
            onClick={handleClick}
          >
            <FaSearch />
          </button>
        </div>
        <Forecast
          city={city}
          state={location?.state}
          tempreture={weatherInfo?.main}
          weather={weatherData?.main}
        />
        <Detailes info={weatherInfo?.main} />
      </div>
    </div>
  );
}
