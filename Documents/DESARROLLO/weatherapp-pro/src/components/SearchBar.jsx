import { useState } from 'react';

export default function SearchBar ({ onSearch}) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim()) {
            onSearch(city);
            setCity('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Buscar Ciudad...'
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type='submit'>Buscar</button>
        </form>
    );
}