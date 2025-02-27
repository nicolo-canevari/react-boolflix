import MovieSearch from '../components/MovieSearch';

function Home() {

    // Questa sarà la pagina principale che mostra la barra di ricerca e i risultati dei film
    return (

        <div>
            {/* componente che permette la ricerca dei film */}
            <MovieSearch />
        </div>

    );

}

export default Home;
