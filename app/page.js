"use client";
import Image from "next/image";
import Search from "./components/Search";
import { useState } from "react";
import Display from "./components/Display";
import Loading from "./components/Loading";

export default function Home() {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <main className="m-0 flex min-h-dvh w-full items-center justify-center bg-gray-400">
      <div className="relative flex min-h-dvh w-full flex-col items-center bg-blue-400 p-5 shadow-xl md:h-[600px] md:min-h-fit md:max-w-[1000px] md:rounded-2xl">
        <Search
          setWeatherData={setWeatherData}
          setLoading={setLoading}
        />
        {loading ? (
          <Loading />
        ) : (
          weatherData ? (
            <Display data={weatherData} />
          ) : <div className="md:h-full font-mono md:mt-auto mt-28 flex flex-col items-center justify-center"><h1 className="text-white text-4xl ">LivelyWeather</h1></div>
        )}
      </div>
    </main>
  );
}
