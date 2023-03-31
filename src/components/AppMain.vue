<script>
import {store} from '../store.js'
export default{
  data(){
    return{
      store

    }
  }
}
</script>

<template>
   <h1>Main</h1>
    <nav>
        <ul v-for=" movies in store.moviesList">
            <li>
                <p>{{ movies.title }}</p>
            </li>
            <li>
                <p>{{ movies.original_title }}</p>
            </li>
            <li>
                <p>{{ movies.original_language }}</p>
            </li>
            <li>
                <p>{{ movies.vote_average }}</p>
            </li>
        </ul>
    </nav>

</template>

<style scoped lang="scss">
@use '../styles/general.scss'
</style>