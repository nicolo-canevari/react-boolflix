// CARD PER VISUALIZZARE LE INFO DI OGNI FILM

function MovieCard({ movie, onClick }) {

    // Funzione per ottenere la bandiera dalla lingua
    function getFlagEmoji(language) {

        const languageToCountry = {

            it: '🇮🇹', // Italiano → Italia
            fr: '🇫🇷', // Francese → Francia
            es: '🇪🇸', // Spagnolo → Spagna
            en: '🇺🇸', // Inglese → Stati Uniti
            de: '🇩🇪', // Tedesco → Germania
            jp: '🇯🇵', // Giapponese → Giappone
            kr: '🇰🇷', // Coreano → Corea del Sud
            cn: '🇨🇳', // Cinese → Cina

        };

        // Restituisce la bandiera se esiste, altrimenti mostra 🏳️
        return languageToCountry[language] || '🏳️';
    }

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
            <p>Voto: {movie.vote}</p>
            <p>Tipo: {movie.type === 'movie' ? '🎬 Film' : '📺 Serie TV'}</p>

        </div>

    );

}

export default MovieCard;