// GESTIONE DELLE CHIAMATE CON AXIOS
import axios from 'axios';

// Chiave API
const API_KEY = 'b3a14b91e542c6aa644c9b1b827c5b7e';
// URL Base
const BASE_URL = 'https://api.themoviedb.org/3';
// Link immagini copertina
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_SIZE = 'w342';


// Creo un'istanza di Axios con la configurazione base
const apiClient = axios.create({

    // Imposto l'URL di base per tutte le richieste
    baseURL: BASE_URL,

    params: {

        // Aggiungo l'API key come parametro fisso a ogni chiamata
        api_key: API_KEY,

    },

});

// Funzione per costruire l'URL della copertina
export function getPosterUrl(path) {

    return path ? `${IMAGE_BASE_URL}${IMAGE_SIZE}${path}` : null;

}

// Funzione per convertire il voto in stelle (1-5)
export function getStarRating(vote) {

    return Math.min(Math.max(Math.ceil(vote / 2), 1), 5);

}

// Funzione per cercare i film per titolo
export function searchMovies(query, language = 'it-IT') {

    return apiClient.get('/search/movie', { params: { query, language } })

        // Restituisco i risultati dei film
        .then((response) => {

            console.log('Risposta API film:', response);
            return response.data;

        })

        .catch((error) => {

            console.error('Errore nella ricerca film:', error.response || error.message || error);
            throw error;

        });

}

// Funzione per cercare le serie TV
export function searchTVShows(query, language = 'it-IT') {

    return apiClient

        .get('/search/tv', { params: { query, language } })
        // Restituisco i risultati delle serie TV
        .then(response => {

            console.log('Risposta API serie TV:', response);
            return response.data;

        })

        .catch((error) => {

            console.error('Errore nella ricerca delle serie TV:', error.response || error.message || error);
            throw error;

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

// Funzione per ottenere la lista dei generi (film + serie TV)
export function getGenres(language = 'it-IT') {

    return apiClient.get('/genre/movie/list', { params: { language } })

        .then((response) => {

            console.log('Generi ottenuti:', response.data.genres);
            return response.data.genres;

        })

        .catch((error) => {

            console.error('Errore nel recupero dei generi:', error.response || error.message || error);
            throw error;

        });

}

// Funzione per ottenere i film filtrati per genere
export function getMoviesByGenre(genreId, language = 'it-IT') {

    return apiClient.get('/discover/movie', {
        params: {
            with_genres: genreId,
            language
        }
    })

        .then(response => {

            console.log('Film per genere:', response.data);
            return response.data;

        })

        .catch((error) => {

            console.error('Errore nel recupero dei film per genere:', error);
            throw error;

        });

}

// Funzione per ottenere le serie TV filtrate per genere
export function getTVShowsByGenre(genreId, language = 'it-IT') {

    return apiClient.get('/discover/tv', {
        params: {
            with_genres: genreId,
            language
        }

    })
        .then(response => {

            console.log('Serie TV per genere:', response.data);
            return response.data;

        })
        .catch((error) => {

            console.error('Errore nel recupero delle serie TV per genere:', error);
            throw error;

        });

}
