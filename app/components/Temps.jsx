import React from "react";

export default function Temps() {
  return (
    <div className="flex items-center justify-center p-3">
      <div>
        <img className="w-14" src="/images/low.svg" alt="sunrise" />
        5:58
      </div>
      <div className="relative h-1 w-3/4 bg-black -translate-y-2 rounded">
        <div className="absolute left-3/4 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-yellow-500"></div>
      </div>
      <div>
        <img className="w-14" src="/images/high.svg" alt="sunset" />
        18:24
      </div>
    </div>
  );
}
