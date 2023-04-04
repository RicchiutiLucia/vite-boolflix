<script>
import AppHeader from './components/AppHeader.vue';
import ListFilm from './components/ListFilm.vue';
import ListSeries from './components/ListSeries.vue'


import axios from 'axios';
import { store } from "./store.js"
export default{
  components:{
    AppHeader,
    ListFilm,
    ListSeries

    


  },
  data(){
    return{
      store,
      
     

    }
  },
  methods:{
    getFilmAndSeries(){
      let Api='https://api.themoviedb.org/3/search';

      let filmApi = Api + '/movie?api_key=addb82fb3a7f441748d95485d50f36bc';

      let seriesApi = Api +'/tv?api_key=addb82fb3a7f441748d95485d50f36bc';

      if(store.searchText.length>0){
        filmApi +=`&query=${store.searchText}`;
        seriesApi +=`&query=${store.searchText}`;

        axios.get(filmApi)
          .then(response => {
            this.store.moviesList=response.data.results;
          })

          axios.get(seriesApi)
          .then(response => {
            this.store.seriesList = response.data.results;
          })
      }

    },
    callGenreList() {
        axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: {
            api_key:'addb82fb3a7f441748d95485d50f36bc' ,
          }
        })
        .then((response) => {
          store.genreList = response.data.genres;
          console.log(store.genreList);
        })
      }
  },
  mounted(){
    this.callGenreList();
  }
}

</script>


<template>

  <AppHeader  @inputSearch="getFilmAndSeries"></AppHeader>

  <main>
    <ListFilm/>

    <ListSeries/>
  </main>
 
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use './styles/partials/variables.scss' as *;

</style>
