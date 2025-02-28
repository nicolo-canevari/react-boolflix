// CARD PER VISUALIZZARE LE INFO DI OGNI FILM / SERIE TV
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { getStarRating } from '../api/tmdb';


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

    const starRating = getStarRating(movie.vote);

    return (

        <div className="movie-card" onClick={() => onClick(movie.id, movie.type)}>

            {movie.poster ? (

                <img
                    src={movie.poster}
                    alt={`Poster di ${movie.title}`}
                    className="movie-poster"
                />

            ) : (

                <div className="no-poster">Nessuna immagine disponibile</div>

            )}

            <h3>{movie.title}</h3>
            <p>Titolo originale: {movie.originalTitle}</p>
            <p>
                Lingua: {movie.language?.toUpperCase()} {getFlagEmoji(movie.language)}
            </p>
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

            <p>Tipo: {movie.type === 'movie' ? '🎬 Film' : '📺 Serie TV'}</p>
            <p className="overview">Overview: {movie.overview}</p>

        </div>

    );

}

export default MovieCard;