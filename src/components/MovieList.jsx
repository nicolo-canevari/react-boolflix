// LISTA DEI FILM TROVATI
import MovieCard from './MovieCard';

function MovieList({ movies, onSelectMovie }) {

    // Divido i film dalle serie TV
    const moviesOnly = movies.filter(movie => movie.type === 'movie');
    const tvShowsOnly = movies.filter(movie => movie.type === 'tv');

    return (

        <div className="movie-list">

            {moviesOnly.length > 0 && (

                <div className="movie-section">

                    <h2>🎬 Film</h2>

                    <div className="movie-grid">

                        {moviesOnly.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onClick={(id, type) => onSelectMovie(id, type)}
                            />

                        ))}

                    </div>

                </div>

            )}

            {tvShowsOnly.length > 0 && (

                <div className="movie-section">

                    <h2>📺 Serie TV</h2>

                    <div className="movie-grid">

                        {tvShowsOnly.map((tvShow) => (

                            <MovieCard
                                key={tvShow.id}
                                movie={tvShow}
                                onClick={(id, type) => onSelectMovie(id, type)}
                            />

                        ))}

                    </div>

                </div>

            )}

        </div>

    );

}
export default MovieList;