import React, { useState, useEffect } from "react";

export default function Temps({ temp, low, high, convertToF, units }) {
  // calculate the percent of progress for status bar
  let percent = 100;
  const range = high.toFixed() - low.toFixed();
  const tempDiff = temp.toFixed() - low.toFixed();
  if (range !== 0) percent = ((tempDiff / range) * 100).toFixed();

  return (
    <div className="flex items-center justify-center p-3">
      <div>
        <img className="w-14" src="/images/low.svg" alt="sunrise" />
        <div className="text-center text-white">
          {units === "metric" ? low.toFixed() : convertToF(low)}
        </div>
      </div>
      <div className="relative h-1 w-3/4 -translate-y-2 rounded bg-black">
        <div
          style={{ left: `${percent}%` }}
          className={
            "absolute top-1/2 h-5 w-5 -translate-x-3 -translate-y-1/2 rounded-full bg-yellow-500"
          }
        ></div>
      </div>
      <div>
        <img className="w-14" src="/images/high.svg" alt="sunset" />
        <div className="text-white">
          {units === "metric" ? high.toFixed() : convertToF(high)}
        </div>
      </div>
    </div>
  );
}
