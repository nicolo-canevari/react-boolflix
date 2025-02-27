import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../api/tmdb';

function Home() {

    // Stato per la query di ricerca
    const [query, setQuery] = useState('');

    // Stato per i risultati dei film
    const [movies, setMovies] = useState([]);

    // Hook per la navigazione
    const navigate = useNavigate();

    // Funzione per gestire la ricerca dei film
    const handleSearch = async () => {

        // .trim per rimuovere gli spazi bianchi all'inizio e alla fine della riga
        if (query.trim()) {

            try {

                const data = await searchMovies(query);
                setMovies(data.results);

            } catch (error) {

                console.error('Errore nella ricerca dei film:', error);

            }

        }
    };

    return (

        <div className="home">

            <h1>BoolFlix 🎬</h1>

            {/* Barra di ricerca */}
            <div className="search-bar">

                <input
                    type="text"
                    placeholder="Cerca un film..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}

                />

                <button onClick={handleSearch}>Cerca</button>

            </div>

            {/* Lista dei film trovati */}
            <div className="movie-list">

                {movies.map((movie) => (

                    <div
                        key={movie.id}
                        className="movie-item"
                        onClick={() => navigate(`/movie/${movie.id}`)}

                    >

                        <h3>{movie.title}</h3>

                        <p>Titolo originale: {movie.original_title}</p>
                        <p>Lingua: {movie.original_language}</p>
                        <p>Voto: {movie.vote_average}</p>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Home;
