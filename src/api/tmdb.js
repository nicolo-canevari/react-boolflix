// GESTIONE DELLE CHIAMATE CON AXIOS
import axios from 'axios';

// Chiave API
const API_KEY = 'b3a14b91e542c6aa644c9b1b827c5b7e';
const BASE_URL = 'https://api.themoviedb.org/3';

// Creo un'istanza di Axios con la configurazione base
const apiClient = axios.create({

    // Imposto l'URL di base per tutte le richieste
    baseURL: BASE_URL,

    params: {

        // Aggiungo l'API key come parametro fisso a ogni chiamata
        api_key: API_KEY,

    },

});

// Funzione per cercare i film per titolo
export function searchMovies(query, language = 'it-IT') {

    return apiClient.get('/search/movie', { params: { query, language } })

        // Ritorna i dati della risposta
        .then((response) => response.data)

        .catch((error) => {

            console.error('Errore nella ricerca film:', error);

        });

}

// Funzione per ottenere i dettagli di un film tramite ID
export function getMovieDetails(movieId, language = 'it-IT') {

    return apiClient.get(`/movie/${movieId}`, { params: { language } })

        .then((response) => response.data)

        .catch((error) => {

            console.error('Errore nel recupero dei dettagli del film:', error);

        });

}


