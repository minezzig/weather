"use client";
import React, { useState } from "react";

export default function Search({ setWeatherData, setLoading, setError }) {
  const [input, setInput] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=${process.env.NEXT_PUBLIC_API_KEY}`,
    );
    const data = await response.json();
    console.log(data);
    setWeatherData(data);

    setInput("");
    setLoading(false);
  };

  return (
    <div className="mb-5 flex w-full justify-end md:absolute md:pr-10">
      <img className="mr-3 w-10 hover:rotate-90 transition-all" src="/images/search.svg" alt="search" />
      <input
        type="text"
        name="search"
        value={input}
        placeholder="Choose a city..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchData()}
        className="rounded-3xl p-2"
      />
    </div>
  );
}
