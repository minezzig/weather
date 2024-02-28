import React from "react";

export default function Stats() {
  return (
    <div className="Container display grid w-full grid-cols-2 gap-4 p-5">
      <div className="flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div>
            <img className="w-20 md:w-10" src="/images/humidity.png" />
          </div>
          <span className="text-3xl">48%</span>
        </div>
        <div>humidty</div>
      </div>

      <div className="flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div>
            <img className="w-20 md:w-10" src="/images/wind.png" />
          </div>
          <span className="text-3xl">2</span>
        </div>
        <div>humidty</div>
      </div>

      <div className="flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div>
            <img className="w-20 md:w-10" src="/images/binocular.png" />
          </div>
          <span className="text-3xl">100%</span>
        </div>
        <div>humidty</div>
      </div>

      <div className="flex flex-col content-center items-center justify-center rounded-2xl bg-slate-50 p-2">
        <div className="flex items-center">
          <div>
            <img className="w-20 md:w-10" src="/images/03d.svg" />
          </div>
          <span className="text-3xl">15%</span>
        </div>
        <div>humidty</div>
      </div>
    </div>
  );
}
