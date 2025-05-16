import React, { useState, useEffect } from 'react';
import { WeatherDisplay } from './components/WeatherDisplay.tsx';
import { fetchWeather } from './utils/fetchWeather.ts';
import SearchBar from './components/SearchBar.tsx';
import './index.css';

// require('dotenv').config()
// console.log(process.env) 

const App = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('Amsterdam');


  useEffect(() => {
    fetchWeather(city)
      .then(data => setWeatherData(data))
      .catch(err => console.error(err))
  }, [city]);

  return (
    <div className=" flex flex-col items-center bg-[#18171a] opacity-98 h-screen">
      <SearchBar onSearch={setCity} />
      <div className="flex flex-col justify-around items-center w-screen h-screen text-white bg-linear">
        <WeatherDisplay data={weatherData} />
      </div>
    </div>

  );
}

export default App;
