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
        },
        methods:{
            
        }
    }
</script>

<template>
    <div>
        <h3 v-if="store.moviesList.length > 0">FILM:</h3>
        <div class="container">
            <div class="box" v-for="(film) in store.moviesList" :key="film.id" >
                <SingleFilm 
                :title="film.title"
                :originalTitle="film.original_title"
                :language="film.original_language"
                :vote="Math.floor(film.vote_average / 2)"
                :image="film.poster_path"
                :overview="film.overview"

                />
                </div>

        </div>

    </div>
    
   
</template>

<style lang="scss" scoped>
</style>