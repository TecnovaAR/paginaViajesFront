<template>
  <div class="relative">
    <div class="flex justify-center bg-primary md:basis-3/4">
      <swiper
        :slidesPerView="1"
        :spaceBetween="50"
        :loop="true"
        :navigation="true"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 120
          },
          '1024': {
            slidesPerView: 2,
            spaceBetween: 140
          },
          '1536': {
            slidesPerView: 3,
            spaceBetween: 135
          },
          '1920': {
            slidesPerView: 3,
            spaceBetween: 200
          },
          '2560': {
            slidesPerView: 3,
            spaceBetween: 300
          },
          '3840': {
            slidesPerView: 3,
            spaceBetween: 260
          }
        }"
        :modules="modules"
        class="swiperTreeImagesCards mb-20 flex justify-center px-8 md:my-20 md:max-w-screen-md md:px-14 lg:max-w-screen-lg lg:px-32 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl 3xl:px-48 4xl:my-28 4xl:max-w-screen-4xl 5xl:max-w-screen-4xl 5xl:px-20"
      >
        <swiper-slide v-for="(text, index) in content" :key="index" class="">
          <TreeImagesCarouselCard :cardContent="text" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="absolute right-0 top-0 h-full w-full bg-[#fff] md:w-1/4"></div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

import TreeImagesCarouselCard from '../Cards/TreeImagesCarouselCard.vue'

export default {
  name: 'TreeImagesCardsCarousel',
  props: {
    content: Object
  },
  setup() {
    return {
      modules: [Navigation]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    TreeImagesCarouselCard
  }
}
</script>

<style>
.swiperTreeImagesCards.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiperTreeImagesCards .swiper-button-next,
.swiperTreeImagesCards .swiper-button-prev {
  color: #000;
}

@media (min-width: 768px) {
  .swiperTreeImagesCards .swiper-button-prev {
    color: #fff;
  }
}
</style>
