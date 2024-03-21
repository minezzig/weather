import React, { useState } from "react";
import Error from "./Error";
import Stats from "./Stats";
import Temps from "./Temps";

export default function Display({ data }) {
  const [units, setUnits] = useState("metric");

  // toggle if user wants to view metric or imperial data
  const toggleUnits = () => {
    setUnits((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  // change data to/from celcius/fahrenheit
  const convertToF = (temp) => {
    return ((9 / 5) * temp + 32).toFixed();
  };

  // calculate (and format) what the local time is in the location the user has searched
  const getLocalTime = (timezone) => {
    const date = new Date(); // get date
    const now = date.getTime(); // turn to milliseconds
    const timeDiff = now + timezone * 1000; // diff between here and there (adjusted with timezone in milli)
    const result = new Date(timeDiff); // turn this to a date object
    const string = result.toISOString(); // make this a string
    const final = string.match(/(\d{2}:\d{2})/)[0]; // format
    if (units === "metric") return final.replace(/^0+/, "");
    else return convertTo12Hour(final);
  };

  // Convert time to 12 hour if necessary
  const convertTo12Hour = (time) => {
    return time.slice(0, 2) < 12
      ? `${time.replace(/^0+/, "")}am`
      : `${time.slice(0, 2) % 12}:${time.slice(-2)}pm`;
  };

  return (
    <div className="flex h-full w-full flex-col md:flex-row md:gap-5">
      {data.message ? (
        <Error error={data.message} />
      ) : (
        <>
          <div className="flex flex-col items-center justify-center md:w-1/2 md:justify-around">
            <div className="z-10 flex flex-col items-center justify-center">
              <div
                className="font-mono text-3xl"
                style={{ letterSpacing: ".3rem" }}
              >
                {data.name}, {data.sys.country}
              </div>
              <div className="mb-3 text-sm text-white md:mb-0">Clear Sky</div>
            </div>

            <div className=" relative flex -translate-y-5 pb-10 md:translate-y-0 md:pb-0">
              <div className="max-w-44 -translate-x-20 md:w-48 md:-translate-x-20 md:-translate-y-16">
                <img
                  src={`/images/${data.weather[0].icon}.svg`}
                  alt="weather"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center md:inset-0">
                <div className="block h-40 w-40 rounded-full bg-black bg-opacity-10 text-center text-8xl leading-[10rem] text-white">
                  {units === "metric"
                    ? data.main.temp.toFixed()
                    : convertToF(data.main.temp)}
                  º
                </div>

                <div className="text-sm text-white">
                  Feels Like:{" "}
                  {units === "metric"
                    ? data.main.feels_like.toFixed()
                    : convertToF(data.main.feels_like)}
                  º
                </div>
                <div className="text-sm text-white ">
                  {getLocalTime(data.timezone)}
                </div>
              </div>
            </div>
            <div className="w-full">
              <Temps
                temp={data.main.temp}
                low={data.main.temp_min}
                high={data.main.temp_max}
                convertToF={convertToF}
                units={units}
              />
            </div>
          </div>

          <div className="right-side flex flex-col items-center justify-center md:w-1/2">
            <Stats
              data={data}
              units={units}
              convertTo12Hour={convertTo12Hour}
            />
          </div>
          <div>
            <div
              className="absolute bottom-3 right-3 block h-8 w-8 rounded-full bg-black bg-opacity-10 text-center leading-8 text-white transition-all hover:bg-opacity-40"
              onClick={toggleUnits}
            >
              {units === "metric" ? "F" : "C"}º
            </div>
          </div>
        </>
      )}
    </div>
  );
}

{
  /*}
<div className="flex">
<div className="w-64 md:w-72 absolute top-0  z-0">
  <img src="/images/01d.svg" alt="weather" />
</div>
<div className="flex flex-col items-center justify-center z-10 my-20">
  <div className="rounded-full bg-black bg-opacity-10 px-3 py-5 text-8xl leading-tight">
    32º
  </div>
  {/* {data.main.temp.toFixed()}ºC*
  <div className="text-sm">Feels Like: 25</div>
</div>
</div>
*/
}
