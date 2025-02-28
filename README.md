LOGICA:

tmdb.js → - Gestisce le chiamate API a TMDb per recuperare dati su film e serie TV
          - Cerca film e serie TV in base a una parola chiave inserita dall'utente
          - Recupera i dettagli completi di un film o di una serie TV a partire dall'ID
          - Filtra i contenuti per genere, mostrando solo film o serie TV di un determinato tipo
          - Genera l'URL delle immagini dei poster per visualizzarli correttamente nell'app
          - Calcola il voto in stelle convertendo il punteggio TMDb (da 0 a 10) in un punteggio da 1 a 5

App.jsx → - Configura il Router per gestire la navigazione tra le pagine
           - Usa un MovieProvider per gestire lo stato globale dei film trovati e selezionati
           - Definisce le rotte principali

MovieContext.jsx (Global contest) → Serve per salvare lo stato dei film trovati e del film/serie selezionato, 
                                     in modo che i componenti possano accedere a queste informazioni senza passarsele manualmente tramite props.

Home.jsx → - Ricerca
            - Filtro per genere
            - Selezione Film/Serie

Header.jsx → contiene la barra di ricerca e il selettore dei generi.       

MovieSearch.jsx → gestisce l'input della ricerca.

GenreSelect.jsx → mostra la lista dei generi e permette di selezionarne uno.

MovieList.jsx → mostra le card dei film e delle serie TV.

MovieCard.jsx → visualizza le informazioni principali del film/serie, con voto e bandiera della lingua.

MovieDetailsPage.jsx → mostra i dettagli completi di un film o una serie TV, facendo un'altra chiamata API.