<script>
export default {
    name:'SingleSeries',
    props:{
        title:String,
        originalTitle:String,
        language:String,
        vote:Number,
        image:String
    },
    data(){
        return{
            star:''
        }
    },
    methods:{
      getValutation(){
        let empty = 5;
            for(let i =0; i < this.vote ;i++){
                empty--
                this.star+='<i class="fa-solid fa-star"></i>';
            }
            for(let i=0;i<empty;i++){
                this.star+='<i class="fa-regular fa-star"></i>';
            }
      },
      getImage(){
        let ImageApi='https://image.tmdb.org/t/p/w342';
            this.imageApi=ImageApi+this.image;
      }
    },
    created(){
      this.getValutation();
      this.getImage();
    }
}
</script>

<template>
    <div class="SingleSerie">
        <div>
            <img :src="imageApi">
        </div>
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
        <h6 v-html="star"></h6>
    </div>
  
</template>

<style lang="scss" scoped>
</style>