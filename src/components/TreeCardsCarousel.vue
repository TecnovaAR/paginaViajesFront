<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="50"
    :navigation="true"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 100
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 100
      }
    }"
    :modules="modules"
    class="swiperTreeCards 5xl:max-w-screen-6xl px-4 md:px-12 lg:mx-auto lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
  >
    <swiper-slide v-for="(text, index) in cardContent" :key="index" class="bg-white shadow-lg">
      <CardTreeCarousel :cardContent="text" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

import CardTreeCarousel from './CardTreeCarousel.vue'

export default {
  name: 'TreeCardsCarousel',
  props: {
    cardContent: Object
  },
  setup() {
    return {
      modules: [Navigation]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    CardTreeCarousel
  }
}
</script>
