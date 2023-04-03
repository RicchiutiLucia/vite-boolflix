<script>

export default {
    name:'SingleFilm',
    props:{
        title:String,
        originalTitle:String,
        language:String,
        vote:Number,
        image:String,
        overview:String
    },
    data(){
      return{
        star:'',
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
     <div class="singleFilm" tabIndex="0">
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img :src="imageApi" :alt="this.title" v-if="this.image != null">
            <img v-else src="../assets/immagineNotFound.png">
            
        </div>
        <div class="card-back">
          <h1 v-if="this.title.length > 0" class="title">{{ this.title }}</h1>
          <h2 v-else class="originalTitle">{{ this.originalTitle }}</h2>
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
          <h6 v-html="star" class="star"></h6>
          <p>{{ overview }}</p>
            
        </div>

        </div>
       

      </div>

        
       
    </div>
  
</template>

<style lang="scss" scoped>
.singleFilm {
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
    .star{
        font-size: 10px;
        color: #ff0;
        
    }
    p{
        color: white;
        font-size: 14px;
    }
    .title{
      font-size: 20px;
      padding: 10px;
    }
    .flag{
      width: 20px;
    }
}

.card {
    background-color: black;
    width: 100%;
    height: 100%;
    perspective: 1000px;
}
.card-inner {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
}
.card:focus {
    outline: 0;
}
.card:hover .card-inner,.card:focus .card-inner{
    transform: rotateY(180deg);
}
.card-front,.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
}
.card-front {
    z-index: 2;
}
.card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    z-index: 1;
    padding: 20px;
}
</style>