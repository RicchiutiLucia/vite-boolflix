<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios';
import { store } from "./store.js"
export default{
  components:{
    AppHeader,
    AppMain,


  },
  data(){
    return{
      store,
      apiKey:'addb82fb3a7f441748d95485d50f36bc',
      apiUrl: 'https://api.themoviedb.org/3/search/movie'

    }
  },
  methods:{
    getMovies(){
      axios.get(this.apiUrl, {
        params: {
          api_key: this.apiKey,
          query: search
        }
      })
      .then((response) => {
          console.log(response.data.results);
          this.store.movies = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }
}

</script>


<template>

  <AppHeader  @inputSearch="getMovies"></AppHeader>
  <AppMain></AppMain>
 
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use './styles/partials/variables.scss' as *;

</style>
