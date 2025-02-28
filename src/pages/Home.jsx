import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPosterUrl, searchMovies, searchTVShows, getMoviesByGenre, getTVShowsByGenre } from '../api/tmdb';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

function Home() {

    // Hook per la navigazione
    const navigate = useNavigate();

    // Stato per i risultati dei film
    const [results, setResults] = useState([]);

    // Hook per il genere 
    const [selectedGenre, setSelectedGenre] = useState('');


    // Funzione per gestire la ricerca dei film
    const handleSearch = (query) => {

        // la ricerca si interrompe se la query è vuota o contiene solo spazi bianchi
        if (!query.trim()) return;

        searchMovies(query).then((movieData) => {
            searchTVShows(query)

                .then((tvData) => {

                    // Normalizzo i dati per avere lo stesso formato
                    const movies = movieData.results.map(movie => ({

                        id: movie.id,
                        title: movie.title,
                        originalTitle: movie.original_title,
                        language: movie.original_language,
                        vote: movie.vote_average,
                        poster: getPosterUrl(movie.poster_path),
                        overview: movie.overview,
                        type: 'movie',
                        genre_ids: movie.genre_ids || []

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
                        type: 'tv',
                        genre_ids: tv.genre_ids || []

                    }));

                    let combinedResults = [...movies, ...tvShows];

                    // Filtro per genere se selezionato
                    if (selectedGenre) {

                        combinedResults = combinedResults.filter(item =>

                            item.genre_ids.includes(Number(selectedGenre))

                        );

                    }

                    // Unisco i risultati
                    setResults(combinedResults);

                })

                .catch(error => console.error('Errore nella ricerca:', error));

        });

    };

    const handleSelectMovie = (id, type) => {

        navigate(`/${type}/${id}`);

    };

    const handleGenreSelect = (genreId) => {

        setSelectedGenre(genreId);

        console.log('Genere selezionato:', genreId);

        if (genreId) {

            getMoviesByGenre(genreId).then((movieData) => {

                const movies = movieData.results.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    originalTitle: movie.original_title,
                    language: movie.original_language,
                    vote: movie.vote_average,
                    poster: getPosterUrl(movie.poster_path),
                    overview: movie.overview,
                    type: 'movie',
                    genre_ids: movie.genre_ids || []
                }));

                getTVShowsByGenre(genreId).then((tvData) => {

                    const tvShows = tvData.results.map(tv => ({
                        id: tv.id,
                        title: tv.name,
                        originalTitle: tv.original_name,
                        language: tv.original_language,
                        vote: tv.vote_average,
                        poster: getPosterUrl(tv.poster_path),
                        overview: tv.overview,
                        type: 'tv',
                        genre_ids: tv.genre_ids || []
                    }));

                    setResults([...movies, ...tvShows]);
                })

                    .catch(error => console.error(error));

            })

        }

    };

    return (

        <div className="home">

            <Header onSearch={handleSearch} onGenreSelect={handleGenreSelect} />

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
