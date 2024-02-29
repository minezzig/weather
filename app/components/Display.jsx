import React from "react";
import Error from "./Error";
import Image from "next/image";
import Stats from "./Stats";
import Temps from "./Temps";

export default function Display({ data }) {
  return (
    <div className="flex h-full w-full flex-col md:flex-row md:gap-5">
      {/* {data.message ? (
        <Error error={data.message} />
      ) : ( */}

      <div className="flex flex-col items-center justify-center md:w-1/2 md:justify-around">
        <div className="z-10 flex flex-col items-center justify-center">
          <div className="text-3xl">
            Madrid, ES
            {/* {data.name}, {data.sys.country} */}
          </div>
          <div>Clear Sky</div>
        </div>

        <div className=" relative flex -translate-y-5 pb-10 md:pb-0 md:translate-y-0">
          <div className="w-52 -translate-x-20 md:w-48 md:-translate-y-16 md:-translate-x-20">
            <img src="/images/03d.svg" alt="weather" />
          </div>
          <div className="absolute inset-x-0 bottom-0 md:inset-0 flex flex-col items-center justify-center">
            <div className="rounded-full text-white bg-black bg-opacity-10 px-3 py-5 text-8xl leading-tight">
              32º
            </div>
            {/* {data.main.temp.toFixed()}ºC*/}
            <div className="text-sm">Feels Like: 25</div>
          </div>
        </div>
        <div className="w-full">
          <Temps />
        </div>
      </div>

      <div className="right-side flex flex-col items-center justify-center md:w-1/2">
        {/*//!justify-center */}
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
