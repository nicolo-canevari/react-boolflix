import MovieSearch from './MovieSearch';

function Header({ onSearch }) {

    return (

        <header className="header">

            <div className="logo">BOOLFLIX</div>
            <MovieSearch onSearch={onSearch} />

        </header>

    );
}

export default Header;