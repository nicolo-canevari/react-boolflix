
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {

  return (

    // Configura il router per la navigazione delle pagine
    <Router>

      {/* Wrappa l'app con il provider del contesto per gestire lo stato globale */}
      <MovieProvider>

        <Routes>

          {/* Rotta principale che mostra la pagina Home con la lista dei film/serie */}
          <Route path="/" element={<Home />} />

          {/* Rotta per visualizzare i dettagli di un film, con ID dinamico */}
          <Route path="/movie/:id" element={<MovieDetailsPage />} />

          {/* Rotta che mostra i dettagli delle serie TV con ID dinamico */}
          <Route path="/tv/:id" element={<MovieDetailsPage />} />

        </Routes>

      </MovieProvider>

    </Router>

  );

}

export default App;