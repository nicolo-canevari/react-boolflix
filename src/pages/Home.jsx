import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies, searchTVShows } from '../api/tmdb';
import MovieSearch from '../components/MovieSearch';
import MovieList from '../components/MovieList';

function Home() {

    // Stato per la query di ricerca
    const [query, setQuery] = useState('');

    // Stato per i risultati dei film
    const [results, setResults] = useState([]);

    // Hook per la navigazione
    const navigate = useNavigate();

    // Funzione per gestire la ricerca dei film
    const handleSearch = (query) => {

        // .trim per rimuovere gli spazi bianchi all'inizio e alla fine della riga
        if (!query.trim()) return;

        searchMovies(query).then((movieData) => {
            searchTVShows(query).then((tvData) => {

                // Normalizzo i dati per avere lo stesso formato
                const movies = movieData.results.map(movie => ({

                    id: movie.id,
                    title: movie.title,
                    originalTitle: movie.original_title,
                    language: movie.original_language,
                    vote: movie.vote_average,
                    type: 'movie'

                }));

                const tvShows = tvData.results.map(tv => ({

                    id: tv.id,
                    // "name" invece di "title"
                    title: tv.name,
                    // "original_name" invece di "original_title"
                    originalTitle: tv.original_name,
                    language: tv.original_language,
                    vote: tv.vote_average,
                    type: 'tv'

                }));

                // Unisco i risultati
                setResults([...movies, ...tvShows]);

            });

        });

    };

    const handleSelectMovie = (id, type) => {

        navigate(`/${type}/${id}`);

    };


    return (

        <div className="home">

            <h1>BoolFlix 🎬</h1>

            <MovieSearch
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch} />

            <MovieList
                movies={results}
                onSelectMovie={handleSelectMovie} />

        </div>

    );

}

export default Home;
