// PAGINA PRINCIPALE DELL'APPLICAZIONE
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPosterUrl, searchMovies, searchTVShows, getMoviesByGenre, getTVShowsByGenre } from '../api/tmdb';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

function Home() {

    const navigate = useNavigate();
    const [results, setResults] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    // Funzione per la ricerca di film e serie TV
    const handleSearch = (query) => {

        if (!query.trim()) return;

        searchMovies(query).then((movieData) => {

            searchTVShows(query)

                .then((tvData) => {
                    // Mappo i risultati dei film
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

                    // Mappo i risultati delle serie TV
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

                    // Combino i risultati di film e serie TV
                    let combinedResults = [...movies, ...tvShows];

                    // Se è selezionato un genere, filtro i risultati
                    if (selectedGenre) {
                        combinedResults = combinedResults.filter(item =>
                            item.genre_ids.includes(Number(selectedGenre))
                        );
                    }

                    setResults(combinedResults);

                })

                .catch(error => console.error('Errore nella ricerca:', error));

        });

    };

    // Gestione selezione film/serie per navigazione
    const handleSelectMovie = (id, type) => {

        navigate(`/${type}/${id}`);

    };

    // Gestione selezione genere
    const handleGenreSelect = (genreId) => {

        setSelectedGenre(genreId);
        console.log('Genere selezionato:', genreId);

        if (genreId) {
            Promise.all([getMoviesByGenre(genreId), getTVShowsByGenre(genreId)])
                .then(([movieData, tvData]) => {
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

                .catch(error => console.error('Errore nel recupero film/serie per genere:', error));

        }

    };

    return (

        <div className="home">

            {/* Header con barra di ricerca e selezione genere */}
            <Header onSearch={handleSearch} onGenreSelect={handleGenreSelect} />

            {/* Mostra un messaggio o la lista dei risultati */}
            {results.length === 0 ? (
                <div className="search-prompt">Prova a cercare un film o una serie TV</div>
            ) : (
                <MovieList movies={results} onSelectMovie={handleSelectMovie} />
            )}

        </div>

    );

}

export default Home;