import React from "react";

export default function Stats({ data, units, convertTo12Hour }) {
  // Convert KM to miles
  const convertToMiles = (distance) => {
    return `${((distance * 0.621371) / 1000).toFixed()} mi`;
  };
  // Convert from radial degrees to a cardinal direction
  const getDirection = (degrees) => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return directions[Math.floor((degrees / 360) * 16)];
  };
  // Format date object, accounting for time difference - and return either 12 or 24 hour time
  const formatTime = (time) => {
    let date = new Date((time + data.timezone) * 1000);

    const string = date.toISOString();
    const time24 = string.match(/(\d{2}:\d{2})/)[0];
    console.log(time24);
    if (units === "metric") return time24.replace(/^0+/, "");
    else return convertTo12Hour(time24);
  };
 

  return (
    <div className="Container display grid w-full grid-cols-2 gap-4 p-5">
      <div className="group flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-all group-hover:translate-y-2">
            <img className="w-20 md:w-10" src="/images/humidity.png" />
          </div>
          <span className="ml-3 text-3xl">{data.main.humidity}%</span>
        </div>
        <div>humidity</div>
      </div>

      <div className="group flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-transform group-hover:translate-x-2">
            <img className="w-20 md:w-10" src="/images/wind.png" />
          </div>
          <span className="ml-3 text-nowrap text-3xl">
            {getDirection(data.wind.deg)}
          </span>
        </div>
        <div>wind</div>
      </div>

      <div className="group flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-transform group-hover:scale-125">
            <img className="w-20 md:w-10" src="/images/binocular.png" />
          </div>
          <span className="ml-3 text-nowrap text-3xl">
            {units === "metric"
              ? `${(data.visibility / 1000).toFixed()} km`
              : convertToMiles(data.visibility)}
          </span>
        </div>
        <div>visibility</div>
      </div>

      <div className="group flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-all group-hover:brightness-50">
            <img className="w-20 md:w-10" src="/images/03d.svg" />
          </div>
          <span className="ml-3 text-3xl">{data.clouds.all}%</span>
        </div>
        <div>clouds</div>
      </div>

      <div className="group flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-transform group-hover:-translate-y-1">
            <img className="w-20 md:w-10" src="/images/sunrise.png" />
          </div>
          <span className="ml-3 text-3xl">{formatTime(data.sys.sunrise)}</span>
        </div>
        <div>sunrise</div>
      </div>

      <div className="group flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-transform group-hover:translate-y-1">
            <img className="w-20 md:w-10" src="/images/sunset.png" />
          </div>
          <span className="ml-3 text-3xl">{formatTime(data.sys.sunset)}</span>
        </div>
        <div>sunset</div>
      </div>
    </div>
  );
}
