import React, { useState, useEffect } from 'react';
import { WeatherDisplay } from './components/WeatherDisplay.tsx';
import { fetchWeather } from './utils/fetchWeather.ts';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Amsterdam');

  useEffect(() => {
    fetchWeather(city)
      .then(data => {
        console.log(data);
        setWeatherData(data);
      })
      .catch(err => console.error(err))
  }, [city]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherDisplay data={weatherData} />
    </div>
  );
}

export default App;
