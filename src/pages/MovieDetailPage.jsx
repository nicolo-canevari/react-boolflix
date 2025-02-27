import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmbd'

function MovieDetailsPage() {

    // Estraggo l'ID del film dai parametri dell'URL
    const { id } = useParams();

    // Stato locale per memorizzare i dettagli del film
    const [movie, setMovie] = useState(null);

    // Effettuo la chiamata API per ottenere i dettagli del film quando l'ID cambia
    useEffect(() => {

        getMovieDetails(id).then(setMovie);

    }, [id]);

    // Mostra un messaggio di caricamento finché i dati non arrivano
    if (!movie) return <p>Caricamento...</p>;

    return (

        <div>

            {/* Mostra il titolo e la descrizione del film */}
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>

        </div>

    );

}

export default MovieDetailsPage;