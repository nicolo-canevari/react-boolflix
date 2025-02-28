// HEADER DELLA PAGINA CON LOGO, RICERCA E SELEZIONE GENERE
import MovieSearch from './MovieSearch';
import GenreSelect from './GenreSelect';

// Componente Header che include la barra di ricerca e il selettore di genere
function Header({ onSearch, onGenreSelect }) {

    return (

        <header className="header">

            {/* Logo dell'app */}
            <div className="logo">BOOLFLIX</div>

            <div className="search-bar">

                {/* Selettore di genere */}
                <GenreSelect onGenreSelect={onGenreSelect} />
                {/* Barra di ricerca */}
                <MovieSearch onSearch={onSearch} />

            </div>

        </header>

    );

}

export default Header;
