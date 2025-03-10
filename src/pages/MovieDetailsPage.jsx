// PAGINA DEI DETTAGLI DEL FILM
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmdb'

function MovieDetailsPage() {

    // Estraggo l'ID del film dai parametri dell'URL
    const { id } = useParams();

    // Stato locale per memorizzare i dettagli del film
    const [movie, setMovie] = useState(null);

    // Effettuo la chiamata API per ottenere i dettagli del film quando l'ID cambia
    useEffect(() => {

        getMovieDetails(id)
            .then(setMovie)
            .catch(() => setMovie(null));

    }, [id]);

    // Mostra un messaggio di caricamento finché i dati non arrivano
    if (!movie) return <p>Errore nella ricerca</p>;

    return (

        <div className="movie-details">

            {/* Mostra il titolo e la descrizione del film */}
            <h1>{movie.title}</h1>
            {/* Mostra la descrizione del film */}
            <p>{movie.overview}</p>
            {/* Mostra la lingua originale del film */}
            <p>Lingua originale: {movie.original_language}</p>
            {/* Mostra il voto medio del film */}
            <p>Voto medio: {movie.vote_average}</p>

        </div>

    );

}

export default MovieDetailsPage;