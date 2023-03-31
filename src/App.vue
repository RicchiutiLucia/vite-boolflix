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
      
     

    }
  },
  methods:{
    getMovies(){
      let myUrl = `${store.apiUrl}&query=${store.searchText}`
      axios.get(myUrl)
      .then((response) => {
          this.store.moviesList = response.data.results;
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
