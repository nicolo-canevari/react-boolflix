// CARD PER VISUALIZZARE LE INFO DI OGNI FILM

function MovieCard({ movie, onClick }) {

    // Funzione per ottenere la bandiera dalla lingua
    function getFlagEmoji(language) {

        const languageToCountry = {

            it: '🇮🇹', // Italiano → Italia
            fr: '🇫🇷', // Francese → Francia
            es: '🇪🇸', // Spagnolo → Spagna
            en: '🇺🇸', // Inglese → Stati Uniti

        };

        // Restituisce la bandiera se esiste, altrimenti mostra 🏳️
        return languageToCountry[language] || '🏳️';
    }

    return (

        <div className="movie-card" onClick={() => onClick(movie.id)}>

            <h3>{movie.title}</h3>
            <p>Titolo originale: {movie.original_title}</p>
            <p>Lingua: {movie.original_language.toUpperCase()} {getFlagEmoji(movie.original_language)}</p>
            <p>Voto: {movie.vote_average}</p>

        </div>

    );

}

export default MovieCard;