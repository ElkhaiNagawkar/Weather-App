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
    setCity(temp.split(","));
  }

  function handleInfoClick() {
    document.querySelector(".info-container")?.classList.toggle("hidden");
    document.querySelector(".info-container")?.classList.toggle("flex");
  }

  React.useEffect(() => {
    if (city?.length === 1) {
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

    if (city?.length === 3) {
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
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Location Not Found");
        }
      })
      .then((data) => {
        setWeatherData(data.weather ? { ...data.weather[0] } : {});
        setWeatherInfo(data);
      })
      .catch((error) => {
        setLocation(null);
      });
  }, [location]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-t from-sky-500 to-teal-300">
      {city?.length !== 0 ? (
        <div className="w-2/6 h-5/6 bg-gradient-to-t from-sky-400 to-teal-200 backdrop-filter-md shadow-md rounded-md flex flex-col transform transition-all ease-out duration-1000 overflow-hidden">
          <div
            className="absolute left-2 top-2 bg-slate-400 h-5 w-5 rounded-full flex justify-center items-center bg-opacity-80 cursor-pointer"
            onClick={handleInfoClick}
          >
            <p className="text-black font-semibold cursor-pointer select-none">
              i
            </p>
          </div>
          <div className="flex items-center justify-around h-1/5">
            <input
              type="text"
              placeholder="Enter"
              className="searchBox w-9/12 h-14 rounded-full placeholder:text-center  placeholder:text-xl placeholder:text-black bg-white opacity-80 text-center text-xl focus:placeholder:opacity-0 border-2 border-gray-400 outline-none"
            />
            <button
              className="w-14 h-14 bg-white opacity-80 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-700"
              onClick={handleClick}
            >
              <FaSearch />
            </button>
          </div>

          {location !== null ? (
            <div className="h-5/6">
              <Forecast
                city={city}
                location={location}
                tempreture={weatherInfo?.main}
                weather={weatherData?.main}
              />
              <Detailes info={weatherInfo?.main} />
            </div>
          ) : (
            <div className="flex justify-center items-center pb-10 overflow-hidden">
              <div className="w-3/6 h-5/6">
                <img
                  src="../svgs/Error.svg"
                  alt=""
                  className="animate-ImgSlide"
                />
                <p className="mt-10 font-bold animate-ImgSlide  delay-1000">
                  Sorry, We could not find the location you are looking for :(
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-2/6 h-20 bg-gradient-to-t from-sky-400 to-teal-200 backdrop-filter-md shadow-md rounded-md flex flex-col relative">
          <div
            className="absolute left-1 top-1 bg-slate-400 h-5 w-5 rounded-full flex justify-center items-center bg-opacity-80 cursor-pointer"
            onClick={handleInfoClick}
          >
            <p className="text-black font-semibold cursor-pointer select-none">
              i
            </p>
          </div>
          <div className="flex items-center justify-around h-20">
            <input
              type="text"
              placeholder="Enter"
              className="searchBox w-9/12 h-12 rounded-full placeholder:text-center  placeholder:text-xl placeholder:text-black bg-white opacity-80 text-center text-xl focus:placeholder:opacity-0 border-2 border-gray-400 outline-none"
            />
            <button
              className="w-1/12 h-12 bg-white opacity-80 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-700"
              onClick={handleClick}
            >
              <FaSearch />
            </button>
          </div>
        </div>
      )}
      <div
        className="info-container hidden absolute w-full h-screen bg-black bg-opacity-20 items-start justify-center"
        onClick={handleInfoClick}
      >
        <div className="bg-gradient-to-t from-sky-400 to-teal-200 bg-opacity-60 mt-24 w-2/6 h-1/4 rounded-md animate-TopSlide">
          <h1 className="text-2xl font-extrabold ml-3 mt-3">
            Format for finding your city:
          </h1>
          <p className="text-sm font-bold ml-3 mt-3">
            If searching for a major city:
          </p>
          <p className="text-sm ml-3">
            You only need to type in the city name.
          </p>
          <p className="text-sm font-bold ml-3 mt-3">
            If searching for a specific city that can be also be found in other
            countries (ex. London Ontario): <br />
          </p>
          <ul className="ml-10 text-sm list-disc">
            <li>
              You need to type in the city name, province/state, and country.
            </li>
            <li>Each field must be seperetaed by a comma and space.</li>
            <li>Example: London, Ontario, Canada</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
