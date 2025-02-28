// CARD PER VISUALIZZARE LE INFO DI OGNI FILM / SERIE TV
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { getStarRating } from '../api/tmdb';

// Componente che mostra le informazioni di un film o serie TV
function MovieCard({ movie, onClick }) {

    // Funzione per ottenere la bandiera dalla lingua
    function getFlagEmoji(language) {

        const languageToCountry = {

            it: '🇮🇹', // Italiano
            fr: '🇫🇷', // Francese
            es: '🇪🇸', // Spagnolo
            en: '🇺🇸', // Inglese
            de: '🇩🇪', // Tedesco
            ja: '🇯🇵', // Giapponese
            ko: '🇰🇷', // Coreano
            zh: '🇨🇳', // Cinese
            ro: '🇷🇴', // Rumeno
            ru: '🇷🇺', // Russo
            pt: '🇵🇹', // Portoghese
            pt_br: '🇧🇷', // Portoghese brasiliano
            ar: '🇸🇦', // Arabo
            hi: '🇮🇳', // Hindi
            nl: '🇳🇱', // Olandese
            sv: '🇸🇪', // Svedese
            da: '🇩🇰', // Danese
            fi: '🇫🇮', // Finlandese
            no: '🇳🇴', // Norvegese
            pl: '🇵🇱', // Polacco
            tr: '🇹🇷', // Turco
            el: '🇬🇷', // Greco
            th: '🇹🇭', // Thailandese

        };

        // Restituisce la bandiera se esiste, altrimenti mostra 🏳️
        return languageToCountry[language] || '🏳️';
    }

    // Calcola il numero di stelle da mostrare in base al voto
    const starRating = getStarRating(movie.vote);

    return (

        <div className="movie-card" onClick={() => onClick(movie.id, movie.type)}>

            {/* Mostra il poster se disponibile, altrimenti mostra un placeholder */}
            {movie.poster ? (

                <img
                    src={movie.poster}
                    alt={`Poster di ${movie.title}`}
                    className="movie-poster"
                />

            ) : (

                <div className="no-poster">Nessuna immagine disponibile</div>

            )}

            {/* Titolo e informazioni principali */}
            <h3>{movie.title}</h3>
            <p>Titolo originale: {movie.originalTitle}</p>

            {/* Mostra la lingua con l'emoji della bandiera */}
            <p>
                Lingua: {movie.language?.toUpperCase()} {getFlagEmoji(movie.language)}
            </p>

            {/* Mostra il voto come stelle (1-5) */}
            <p className="stars">

                Voto:&nbsp;
                {[...Array(5)].map((_, index) => (

                    index < starRating ? (
                        <FontAwesomeIcon key={index} icon={faStarFull} color="#FFD700" />
                    ) : (
                        <FontAwesomeIcon key={index} icon={faStarEmpty} color="#FFD700" />
                    )

                ))}

            </p>

            {/* Indica se è un film o una serie TV */}
            <p>Tipo: {movie.type === 'movie' ? '🎬 Film' : '📺 Serie TV'}</p>
            {/* Mostra la panoramica della trama */}
            <p className="overview">Overview: {movie.overview}</p>

        </div>

    );

}

export default MovieCard;