import React from "react";

export default function Stats() {
  const style = {
    border: "1px solid black",
  };
  return (
    <div className="Container display grid w-full grid-cols-2 gap-4 p-5">
      <div className="flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-all hover:translate-y-2">
            <img className="w-20 md:w-10" src="/images/humidity.png" />
          </div>
          <span className="ml-3 text-3xl">48%</span>
        </div>
        <div>humidty</div>
      </div>

      <div className="flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-transform hover:translate-x-2">
            <img className="w-20 md:w-10" src="/images/wind.png" />
          </div>
          <span className="ml-3 text-3xl">2 NNE</span>
        </div>
        <div>wind</div>
      </div>

      <div className="flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-transform hover:scale-125">
            <img className="w-20 md:w-10" src="/images/binocular.png" />
          </div>
          <span className="ml-3 text-3xl">100%</span>
        </div>
        <div>visibility</div>
      </div>

      <div className="flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-all hover:brightness-50">
            <img className="w-20 md:w-10" src="/images/03d.svg" />
          </div>
          <span className="ml-3 text-3xl">15%</span>
        </div>
        <div>clouds</div>
      </div>

      <div className="flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-transform hover:-translate-y-1">
            <img className="w-20 md:w-10" src="/images/sunrise.png" />
          </div>
          <span className="ml-3 text-3xl">7:24</span>
        </div>
        <div>sunrise</div>
      </div>

      <div className="flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div className="transition-transform hover:translate-y-1">
            <img className="w-20 md:w-10" src="/images/sunset.png" />
          </div>
          <span className="ml-3 text-3xl">19:52</span>
        </div>
        <div>sunset</div>
      </div>
    </div>
  );
}
