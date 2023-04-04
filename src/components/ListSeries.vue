<script>
    import {store} from '../store.js';
    import SingleSeries from './SingleSeries.vue';
    export default {
        name:'ListSeries',
        components:{
            SingleSeries
        },
        data(){
            return{
                store
            }
        }
}
</script>

<template>
    <div>
        <h3 v-if="store.seriesList.length > 0"> SERIE TV:</h3>
        <div class="container">
            <div class="box" v-for="(serie) in store.seriesList" :key="serie.id">
                <SingleSeries
                :title="serie.name"
                :originalTitle="serie.original_name"
                :language="serie.original_language"
                :vote="Math.floor(serie.vote_average / 2)"
                :image="serie.backdrop_path"
                :overview="serie.overview"
                :genreList="store.genreList"
                :movieGenres="serie.genre_ids"
                />
            </div>

        </div>
       

    </div>
    
</template>

<style lang="scss" scoped>
.container .box{
    width: calc(100% / 4 - 20px);
    height: 230px;
    
}
</style>