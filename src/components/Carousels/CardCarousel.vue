<template>
  <swiper :pagination="pagination" :modules="modules" class="swiperRectangle">
    <swiper-slide v-for="(text, index) in cardContent" :key="index">
      <div class="flex flex-col items-center justify-center">
        <!-- Card Star -->
        <div class="mb-4">
          <img src="src/assets/icons/star-white.svg" class="h-18 4xl:h-20" alt="Star Icon" />
        </div>
        <!-- Card Title -->
        <div class="mb-4">
          <h2 class="text-xl font-semibold">
            {{ text.title }}
          </h2>
        </div>
        <!-- Card Description -->
        <div class="mb-12">
          <p class="">
            {{ text.description }}
          </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import required modules
import { Pagination } from 'swiper'

export default {
  name: 'CardCarousel',
  props: {
    cardContent: Object
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        dynamicBullets: true
      },
      modules: [Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
