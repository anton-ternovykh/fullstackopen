import axios from "axios";
const api_key = import.meta.env.VITE_OPENWEATHER_KEY;

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const getWeather = (lat, lon) => {
    const url = `${baseUrl}lat=${lat}&lon=${lon}&appid=${api_key}`;
    return axios.get(url).then(response => response.data);
}

export default {
    getWeather
}