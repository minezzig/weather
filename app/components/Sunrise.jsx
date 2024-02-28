import React from "react";

export default function Sunrise() {
  return (
    <div className="flex w-full items-center justify-center p-3">
      <div>
        <img className="w-10" src="/images/sunrise.png" alt="sunrise" />
        5:58
      </div>
      <div className="relative h-1 w-3/4 bg-black -translate-y-2 m-3">
        <div className="absolute left-3/4 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-yellow-500"></div>
      </div>
      <div>
        <img className="w-10" src="/images/sunset.png" alt="sunset" />
        18:24
      </div>
    </div>
  );
}
