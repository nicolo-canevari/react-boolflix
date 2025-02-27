// GLOBAL STATE PER I COMPONENTS
import { createContext, useState } from 'react';

const MovieContext = createContext();

export function MovieProvider({ children }) {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (

        <MovieContext.Provider value={{ movies, setMovies, selectedMovie, setSelectedMovie }}>
            {children}
        </MovieContext.Provider>

    );

}

export default MovieContext;