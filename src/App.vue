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

    }
  }
}

</script>


<template>

  <AppHeader></AppHeader>
  <AppMain></AppMain>
 
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use './styles/partials/variables.scss' as *;

</style>
