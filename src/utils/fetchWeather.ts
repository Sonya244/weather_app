import React from 'react';


export const fetchWeather = async (city) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    console.log(API_KEY)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error('Failed to fetch weather');
    const data = await response.json();
    console.log(data)
    return data;
}

