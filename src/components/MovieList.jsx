// LISTA DEI FILM TROVATI
import MovieCard from './MovieCard';

function MovieList({ movies, onSelectMovie }) {

    return (

        <div className="movie-list">

            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onClick={onSelectMovie} />
            ))}

        </div>

    );

}

export default MovieList;