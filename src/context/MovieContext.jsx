// GLOBAL STATE PER I COMPONENTS
import { createContext, useState } from 'react';

// Creo il contesto per gestire lo stato globale dei film
const MovieContext = createContext();

export function MovieProvider({ children }) {

    // Stato per la lista dei film o serie TV trovati
    const [movies, setMovies] = useState([]);

    // Stato per il film o la serie TV selezionata
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (

        <MovieContext.Provider value={{ movies, setMovies, selectedMovie, setSelectedMovie }}>
            {children}
        </MovieContext.Provider>

    );

}

export default MovieContext;