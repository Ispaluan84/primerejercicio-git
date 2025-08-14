import { useState } from 'react'
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es`;
      const response = await axios.get(url);
    } catch (error) {
      console.error('Error al obtener datos del clima:', error);
      setWeatherData(null);
    }
  };

  return (
  
    <div>
      <h1>WeatherApp Pro</h1>
      <SearchBar onSearch={fetchWeather} />
      {weatherData && <WeatherCard data={weatherData} />}    
    </div>
  )   
}  