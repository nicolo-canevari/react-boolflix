import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {

  return (

    // MovieProvider wrappa l'app per fornire lo stato globale a tutti i componenti
    <MovieProvider>

      {/* Router gestisce la navigazione tra le pagine */}
      <Router>

        <Routes>

          {/* Rotta principale che mostra la pagina Home */}
          <Route path="/" element={<Home />} />
          {/* Rotta che mostra i dettagli del film con ID dinamico */}
          <Route path="/movie/:id" element={<MovieDetailsPage />} />

        </Routes>

      </Router>

    </MovieProvider>

  );

}

export default App;