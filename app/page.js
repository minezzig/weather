"use client";
import Image from "next/image";
import Search from "./components/Search";
import { useState } from "react";
import Display from "./components/Display";

export default function Home() {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  return (
    <main className="m-0 flex h-[100vh] w-full justify-center bg-gray-400">
      <div className="flex w-[500px] flex-col items-center rounded-2xl bg-blue-400 p-5">
        <Search
          setWeatherData={setWeatherData}
          setLoading={setLoading}
          setError={setError}
        />
        <Display data={weatherData} loading={loading} error={error} />
      </div>
    </main>
  );
}
