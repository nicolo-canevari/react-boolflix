// BARRA DI RICERCA PER I FILM
import { useState } from 'react';

function MovieSearch({ onSearch }) {

    // Stato locale per gestire il testo della ricerca
    const [query, setQuery] = useState('');

    // Funzione per avviare la ricerca
    const handleSearch = () => {

        // Rimuovo eventuali spazi vuoti all'inizio e alla fine della query
        onSearch(query.trim());

    };

    return (

        <div className="search-bar">

            {/* Campo di input per inserire il titolo del film o della serie */}
            <input
                type="text"
                placeholder="Cerca un film o una serie TV..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {/* Bottone per avviare la ricerca */}
            <button onClick={handleSearch}>Cerca</button>

        </div>

    );

}

export default MovieSearch;