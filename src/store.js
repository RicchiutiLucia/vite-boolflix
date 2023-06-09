import { reactive } from "vue";

export const store = reactive(
    {
        searchText: '',
        moviesList:[],
        seriesList:[],
        genreList: [],
        selectorGenre:"",
        filmFiltered:[],
        serieFiltered:[],
    }
);