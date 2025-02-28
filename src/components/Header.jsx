import { useEffect, useState } from 'react';
import MovieSearch from './MovieSearch';
import { getGenres } from '../api/tmdb';

function Header({ onSearch, onGenreSelect }) {

    const [genres, setGenres] = useState([]);

    // Effettua la chiamata API per ottenere i generi
    useEffect(() => {

        getGenres()

            .then((data) => {

                // Controlla cosa arriva
                if (Array.isArray(data)) {
                    console.log('Generi ricevuti:', data);
                    setGenres(data);

                } else {
                    console.error('Formato dati generi non valido:', data);
                    setGenres([]);
                }

            })

            .catch((error) => {
                console.error('Errore nel recupero dei generi:', error);
                setGenres([]);

            });

    }, []);

    return (

        <header className="header">

            <div className="logo">BOOLFLIX</div>

            <div className="search-bar">

                {/* Dropdown dei generi */}
                <select
                    className="genre-select"
                    onChange={(e) => onGenreSelect(e.target.value)}
                >
                    <option value="">Tutti i generi</option>

                    {genres.length > 0 ? (

                        genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>

                        ))

                    ) : (
                        <option disabled>Nessun genere disponibile</option>

                    )}

                </select>

                {/* Componente di ricerca */}
                <MovieSearch onSearch={onSearch} />

            </div>

        </header>

    );

}

export default Header;