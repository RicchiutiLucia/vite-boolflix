<script>
    import {store} from '../store.js';
    import SingleFilm from '../components/SingleFIlm.vue';
    export default {
        name:'ListFilm',
        components:{
            SingleFilm
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="card-list">
        <h1 v-if="store.moviesList.length > 0">Lista Film:</h1>
         <div class="cards-container" v-for="(film,i) in store.moviesList" :key="i">
        <SingleFilm 
            :title="film.title"
            :originalTitle="film.original_title"
            :language="film.original_language"
            :vote="Math.floor(film.vote_average / 2)"
            :image="film.poster_path"

        />
    </div>

    </div>
    
   
</template>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  width: 25%;
  padding: 0.5rem 1rem;

}
</style>