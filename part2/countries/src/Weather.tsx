import {useEffect, useState} from "react";
import weatherService from './weather.js';

export const Weather = ({country}) => {
    const [weatherData, setWeatherData] = useState({})

    useEffect(() => {
        weatherService.getWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
            .then(data => {
                setWeatherData(data);
            })
    }, []);

    if (!weatherData.main)
        return null;

    return (
        <>
            <h3>Weather in {country.capital}</h3>
            <p>Temperature: {weatherData.main.temp}</p>
            {weatherData.weather.map(weather => {

                return <div key={weather.id}>
                    <div>{weather.description}</div>
                    <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" class="icon-img"/>
                </div>
            })}
            <p>Wind: {weatherData.wind.speed} m/s</p>
        </>
    )
}