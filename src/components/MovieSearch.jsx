// BARRA DI RICERCA PER I FILM
import { useState } from 'react';

function MovieSearch({ onSearch }) {

    const [query, setQuery] = useState('');

    const handleSearch = () => {

        onSearch(query.trim());
    };

    return (

        <div className="search-bar">

            <input
                type="text"
                placeholder="Cerca un film o una serie TV..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Cerca</button>

        </div>

    );

}

export default MovieSearch;