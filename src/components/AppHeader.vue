<script>

  import { store } from '../store.js';
    export default {
        name: 'AppHeader',
        data() {
            return {
                store
            }
        }
    }

</script>

<template>

  <header>
    <div class="title">
      <a href="!#">BOOLFLIX</a>
    </div>
    <div class="selection">
      <form >
        <label for="search">
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Scegli il Film o la Serie TV"
            v-model="store.searchText"
            @keyup.enter="$emit('inputSearch', store.searchText)"
          >
          <button>Cerca</button>
        </label>
      </form>
    </div>
  </header>

</template>

<style scoped lang="scss">
@use '../styles/general.scss';

header{
  height: 10vh;
  background-color: black;
  display: flex;
  justify-content: space-between ;
  align-items: center;
  padding: 0 2rem;
}
.title {
  a {
    color: red;
    font-size: 30px;
    font-weight: bolder;
  }
}
#search {
  border-radius: 5px;
  padding: 2px 5px;
  cursor: pointer
}
button {
  margin: 0 .5rem;
  background-color: red;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px 5px;
  cursor: pointer;
}

</style>