// LISTA DEI FILM TROVATI
import MovieCard from './MovieCard';

function MovieList({ movies, onSelectMovie }) {

    return (

        <div className="movie-list">

            {movies.map((movie) => (

                <MovieCard key={movie.id} movie={movie} onClick={(id, type) => onSelectMovie(id, type)} />

            ))}

        </div>

    );

}

export default MovieList;