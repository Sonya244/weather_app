import React from 'react';

type Weather = {
    description: string
}

type WeatherData = {
    name: string,
    main: {
        temp: number,
        feels_like: number
    },
    weather: Weather[]
};



export const WeatherDisplay = ({ data }: { data: WeatherData }) => {
    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className='relative w-90 h-90 flex items-center '>
            <div className=' w-90 h-100 absolute rounded-full bg-gradient-to-r from-red-600 to-yellow-200 blur-xl '/>
            <div className='relative text-white flex flex-col items-center justify-center h-full font-(family-name:--font-raleway)'>
                    <h2 className='text-4xl'> {data.name} </h2>
                    <p>{data.weather[0].description},</p>
                <p>feels like {data.main.feels_like}<span>&#176;</span></p>
                <p className='text-6xl'>{data.main.temp} <span>&#8451;</span></p>
                </div>

            
        </div>)
}

export default WeatherDisplay