// BARRA DI RICERCA PER I FILM
import { useState } from 'react';

function MovieSearch({ onSearch }) {

    const [query, setQuery] = useState('');

    const handleSearch = () => {

        if (query.trim()) {
            onSearch(query);
        }

    };

    return (

        <div className="search-bar">

            <input
                type="text"
                placeholder="Cerca un film..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Cerca</button>

        </div>

    );

}

export default MovieSearch;