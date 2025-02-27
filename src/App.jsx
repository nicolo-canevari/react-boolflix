
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {

  return (

    // gestisce la navigazione tra le pagine
    <Router>

      {/* wrappa */}
      <MovieProvider>

        <Routes>

          {/* Rotta principale che mostra la pagina Home */}
          <Route path="/" element={<Home />} />
          {/* Rotta che mostra i dettagli del film con ID dinamico */}
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          {/* Rotta che mostra i dettagli delle serie TV con ID dinamico */}
          <Route path="/tv/:id" element={<MovieDetailsPage />} />

        </Routes>

      </MovieProvider>

    </Router>

  );

}

export default App;