<script>
    import {store} from '../store.js';
    import SingleFilm from './SingleFilm.vue';
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
    <h1 v-if="store.moviesList.length > 0">Lista Film:</h1>
    <div class="box" v-for="(film,i) in store.moviesList" :key="i">
        <SingleFilm 
            :title="film.title"
            :originalTitle="film.original_title"
            :language="film.original_language"
            :vote="film.vote_average"
        />
    </div>
</template>

<style lang="scss" scoped>
</style>