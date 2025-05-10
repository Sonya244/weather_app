import React from 'react';

type Weather = {
    description: string
}

type WeatherData = {
    name: string,
    main: {
        temp: number
    },
    weather: Weather[]
};



export const WeatherDisplay = ({ data }: { data: WeatherData }) => {
    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2> Weather in {data.name} {data.main.temp} C {data.weather[0].description}</h2>

        </div>
    )
}

export default WeatherDisplay