// GESTISCE IL MENU' A TENDINA PER LA SELEZIONE DEI GENERI 
import { useEffect, useState } from 'react';
import { getGenres } from '../api/tmdb';

// Componente che mostra un select per scegliere un genere
function GenreSelect({ onGenreSelect }) {

    const [genres, setGenres] = useState([]);

    // Effetto per caricare i generi quando il componente viene montato
    useEffect(() => {

        getGenres()

            .then((data) => {
                // Verifica se i dati ricevuti sono un array valido
                if (Array.isArray(data)) {
                    console.log('Generi ricevuti:', data);
                    setGenres(data);
                } else {
                    console.error('Formato dati generi non valido:', data);
                    setGenres([]);
                }
            })
            .catch((error) => {
                // Gestione degli errori API
                console.error('Errore nel recupero dei generi:', error);
                setGenres([]);
            });

    }, []);

    return (

        // Select per scegliere un genere, chiama la funzione onGenreSelect al cambio di valore
        <select
            className="genre-select"
            onChange={(e) => onGenreSelect(e.target.value)}
        >
            {/* Opzione di default per mostrare tutti i generi */}
            <option value="">Tutti i generi</option>
            {genres.length > 0 ? (
                genres.map((genre) => (

                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>

                ))

            ) : (
                // Opzione disabilitata se non ci sono generi disponibili
                <option disabled>Nessun genere disponibile</option>

            )}

        </select>

    );

}

export default GenreSelect;
