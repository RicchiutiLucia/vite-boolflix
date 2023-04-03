<script>
export default {
    name:'SingleFilm',
    props:{
        title:String,
        originalTitle:String,
        language:String,
        vote:Number
    }
}
</script>

<template>
     <div class="SingleFilm">
        <h1>{{ this.title }}</h1>
        <h2>{{ this.originalTitle }}</h2>
        <div>
            <img
              class="flag"
              :src="
                    this.language == 'en'
                  ? `https://www.countryflagicons.com/FLAT/48/GB.png`
                  : this.language == 'ja'
                  ? `https://www.countryflagicons.com/FLAT/48/JP.png`
                  : this.language == 'ko'
                  ? `https://www.countryflagicons.com/FLAT/48/KR.png`
                  : this.language == 'zh'
                  ? `https://www.countryflagicons.com/FLAT/48/CN.png`
                  : `https://www.countryflagicons.com/FLAT/48/${this.language.toUpperCase()}.png`
              "
              :alt="this.language"
            />
        </div>
        <h6>{{ this.vote }}</h6>
    </div>
  
</template>

<style lang="scss" scoped>
.singleFilm {
    text-align: center;
    height: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid white;
    border-radius: 0.5rem;

    * {
      margin-bottom: 0.5rem;
    }
  }
</style>