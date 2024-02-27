import React from "react";

export default function Display({ data, loading, error }) {
  if (loading) return "Loading...";
  if (error) return `Sorry, ${error}`;
  if (data && data.name) {
    return (
      <div>
        <p className="text-3xl">
          {data.name}, {data.sys.country}
        </p>
        <p className="text-6xl">{data.main.temp.toFixed()}ºC</p>
      </div>)
  }
}
