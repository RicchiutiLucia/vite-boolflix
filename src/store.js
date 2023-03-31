import { reactive } from "vue";

export const store = reactive(
    {
        searchText: '',
        moviesList:[],
        seriesList:[],
        apiKey:'addb82fb3a7f441748d95485d50f36bc',
        apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=addb82fb3a7f441748d95485d50f36bc&language=it-IT"'
        
    }
);