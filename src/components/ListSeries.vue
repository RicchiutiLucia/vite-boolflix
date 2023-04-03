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
    <h1 v-if="store.seriesList.length > 0">Lista Serie TV:</h1>
    <div class="box" v-for="(serie,i) in store.seriesList" :key="i">
        <SingleSeries
            :title="serie.name"
            :originalTitle="serie.original_name"
            :language="serie.original_language"
            :vote="Math.floor(serie.vote_average / 2)"
            :image="serie.poster_path"
        />
    </div>
</template>

<style lang="scss" scoped>
</style>