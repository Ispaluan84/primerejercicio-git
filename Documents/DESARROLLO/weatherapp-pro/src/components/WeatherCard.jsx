export default function WeatherCard({ data }) {
    return (
        <div className="weather-card fade-in">
            <h2>{data.location.name}, {data.location.country}</h2>
            <img src={data.current.condition.icon} alt={`Icono del clima ${data.current.condition.text}`} />
            <p>{data.current.condition.text}</p>
            <p>🌡 {data.current.temp_c}ºC</p>
            <p>💧 Humedad: {data.current.humidity}%</p>
            <p>🌬 Viento: {data.current.wind_kph} km/h</p>
        </div>
    );
}