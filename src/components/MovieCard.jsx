// CARD PER VISUALIZZARE LE INFO DI OGNI FILM
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie, onClick }) {

    return (

        <div className="movie-card" onClick={() => onClick(movie.id)}>
            <h3>{movie.title}</h3>
            <p>Titolo originale: {movie.original_title}</p>
            <p>Lingua: {movie.original_language}</p>
            <p>Voto: {movie.vote_average}</p>
        </div>

    );

}

export default MovieCard;