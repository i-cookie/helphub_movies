<template>
  <div class="tdesign-demo-block--swiper">
    <t-swiper :navigation="{ placement: 'outside' }">
      <t-swiper-item>
        <div class="demo-item">{{ firstMovie }}</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">{{ secondMovie }}</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">{{ thirdMovie }}</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">{{ fourthMovie }}</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">{{ fifthMovie }}</div>
      </t-swiper-item>
      <t-swiper-item>
        <div class="demo-item">{{ sixthMovie }}</div>
      </t-swiper-item>
    </t-swiper>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "MovieSwiper",
  data() {
    return {
      firstMovie: 'the first movie',
      secondMovie: 'the second movie',
      thirdMovie: 'the third movie',
      fourthMovie: 'the fourth movie',
      fifthMovie: 'the fifth movie',
      sixthMovie: 'the sixth movie'
    }
  },
  methods: {
    getMovie(ind) {
      ind.toString();
      const path = 'http://localhost:8081/movies';
      axios
        .get(path.concat('/', ind))
        .then((response) => {
          switch (ind) {
            case '1':
              this.firstMovie = response.name;
              break;
            case '2':
              this.secondMovie = response.name;
              break;
            case '3':
              this.thirdMovie = response.name;
              break;
            case '4':
              this.fourthMovie = response.name;
              break;
            case '5':
              this.fifthMovie = response.name;
              break;
            case '6':
              this.sixthMovie = response.name;
              break;
          }
        })
        .catch(err => {console.log(err)});
    }
  },
  mounted() {
    for (var i = 1; i < 6; i++) {
      this.getMovie(i);
      console.log(i);
    }
  }
}
</script>

<style>
  .demo-item {
    font-size: 30px;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    height: 400px;
    width: 960px;
    border: 5px solid gray;
  }
</style>