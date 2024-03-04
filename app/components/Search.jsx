"use client";
import React, { useState } from "react";

export default function Search({ setWeatherData, setLoading }) {
  const [input, setInput] = useState("");
  const [searchOpen, setSearchOpen] = useState(true);

  const fetchData = async () => {
    // set variable to show loader
    setLoading(true);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=${process.env.NEXT_PUBLIC_API_KEY}`,
    );
    const data = await response.json();
    setWeatherData(data);
    setSearchOpen(false);

    setInput("");
    setLoading(false);
  };

  return (
    <div className="mb-5 flex w-full justify-end md:absolute md:pr-10">
      <img
        className="mr-3 w-10 cursor-pointer transition-all hover:rotate-90"
        src="/images/search.svg"
        onClick={() => setSearchOpen(!searchOpen)}
        alt="search"
      />
      <input
        type="text"
        name="search"
        value={input}
        placeholder="Choose a city..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchData()}
        className={`rounded-3xl transition-all ${searchOpen ? "w-52 p-2" : "w-0"}`}
      />
    </div>
  );
}
