"use client";
import Image from "next/image";
import Search from "./components/Search";
import { useState } from "react";
import Display from "./components/Display";
import Loading from "./components/Loading";

export default function Home() {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  return (
    <main className="m-0 flex h-dvh w-full justify-center bg-gray-400 items-center">
      <div className="flex w-full h-dvh md:max-w-[1000px] md:h-[600px] flex-col items-center bg-blue-400 p-5 md:rounded-2xl shadow-xl relative">
 
          <Search
            setWeatherData={setWeatherData}
            setLoading={setLoading}
            setError={setError}
          />
     
        {/* {loading ? (
            <Loading />
          ) : (
            weatherData && <Display data={weatherData} error={error} />
          )} */}
        <Display data={weatherData} error={error} />
      </div>
    </main>
  );
}
