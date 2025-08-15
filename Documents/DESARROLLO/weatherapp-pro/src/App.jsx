import { useEffect, useState } from 'react'
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es`;
      const response = await axios.get(url);

      if(response.data.error) {
        setError('Ciudad no Encontrada.');
        setWeatherData(null);
      } else {
        setWeatherData(response.data);
        setError('');
      }
    } catch (err) {
      console.error('Error al obtener datos del clima:', err);
      setWeatherData(null);
      setError('Error al conectar con WeatherAPI')
    }
  };

  useEffect(() => {
    const lastCity = localStorage.getItem('lastCity');
    if(lastCity) {
      fetchWeather(lastCity);
    }
  }, []);  

  return (
  
    <div className='app-container'>
      <h1>🌤 WeatherApp Pro</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}    
    </div>
  )   
}  