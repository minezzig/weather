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
        <div className="w-52 md:w-96">
          <img src="/images/01d.svg" alt="pic" />
        </div>
        <div className="text-6xl">
          32º
          {/* {data.main.temp.toFixed()}ºC*/}
        </div>
        <div>Feels Like: 25</div>
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
