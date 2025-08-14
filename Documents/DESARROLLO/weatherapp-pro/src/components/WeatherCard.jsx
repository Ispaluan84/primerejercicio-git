export default function WeatherCard({ data }) {
    return (
        <div>
            <h2>{data.location.name}, {data.location.country}</h2>
            <img src={data.current.condition.icon} alt={data.current.condition.text} />
            <p>{data.current.condition.text}</p>
            <p>🌡 {data.current.temp_c}ºC</p>
            <p>💧 Humedad: {data.current.humidity}%</p>
            <p>🌬 Viento: {data.current.wind_kph} km/h</p>
        </div>
    );
}