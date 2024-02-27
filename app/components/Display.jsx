import React from "react";
import Error from "./Error";
import Image from "next/image";

export default function Display({ data, error }) {
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <div>
        <p className="text-3xl">
          {data.name}, {data.sys.country}
        </p>
        <p className="text-6xl">{data.main.temp.toFixed()}ºC</p>
        {console.log(data.weather.icon)}
        <Image 
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              width={200}
              height={200}
              alt="weather icon"
        />
      </div>
    );
  }
}

