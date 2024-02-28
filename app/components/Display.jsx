import React from "react";
import Error from "./Error";
import Image from "next/image";
import Stats from "./Stats";
import Sunrise from "./Sunrise";

export default function Display({ data }) {
  return (
    <div className="flex h-full w-full flex-col md:flex-row">
      {/* {data.message ? (
        <Error error={data.message} />
      ) : ( */}

      <div className="flex flex-col items-center justify-center md:w-1/2">
        <div className="text-3xl">
          Madrid, ES
          {/* {data.name}, {data.sys.country} */}
        </div>
        <div>Clear Sky</div>
        <div className="m-5 w-52 -translate-x-20 md:w-72">
          <img src="/images/01d.svg" alt="weather" />
        </div>
        <div className="flex -translate-y-28 flex-col items-center justify-center">
          <div className="rounded-full bg-black bg-opacity-10 px-3 py-5 text-8xl leading-tight">
            32º
          </div>
          {/* {data.main.temp.toFixed()}ºC*/}
          <div className="text-sm">Feels Like: 25</div>
        </div>
      </div>
      <div>
        <Sunrise />
      </div>
      <div className="right-side flex h-full flex-col items-center justify-center md:w-1/2">
        <Stats />
      </div>
      {/* <Image
              //src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              src={`/images/${data.weather[0].icon}.svg`}
              width={200}
              height={200}
              alt="weather icon"
            />{" "}
            */}

      {/* )} */}
    </div>
  );
}
