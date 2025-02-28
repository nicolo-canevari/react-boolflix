import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPosterUrl, searchMovies, searchTVShows } from '../api/tmdb';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

function Home() {

    // Hook per la navigazione
    const navigate = useNavigate();

    // Stato per i risultati dei film
    const [results, setResults] = useState([]);


    // Funzione per gestire la ricerca dei film
    const handleSearch = (query) => {

        // la ricerca si interrompe se la query è vuota o contiene solo spazi bianchi
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
                    poster: getPosterUrl(movie.poster_path),
                    overview: movie.overview,
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
                    poster: getPosterUrl(tv.poster_path),
                    overview: tv.overview,
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

            <Header onSearch={handleSearch} />

            {/* Scritta che appare nella home prima che parta la ricerca */}
            {results.length === 0 ? (

                <div className="search-prompt">
                    Prova a cercare un film o una serie TV
                </div>

            ) : (

                <MovieList
                    movies={results}
                    onSelectMovie={handleSelectMovie} />

            )}

        </div>

    );

}

export default Home;
