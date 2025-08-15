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
        <form onSubmit={handleSubmit} aria-label='Formulario de búsqueda'>
            <label htmlFor='cityInput' className='visually-hidden'>Ciudad</label>
            <input 
                id='cityInput'
                type='text'
                placeholder='Buscar Ciudad...'
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type='submit'>Buscar</button>
        </form>
    );
}