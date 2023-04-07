<template>
  <swiper :pagination="pagination" :modules="modules" class="swiperRectangle">
    <swiper-slide v-for="(text, index) in cardContent" :key="index">
      <div class="flex flex-col items-center justify-center">
        <!-- Card Star -->
        <div class="mb-4">
          <img src="src/assets/icons/star-white.svg" class="h-14 4xl:h-20" alt="Star Icon" />
        </div>
        <!-- Card Title -->
        <div class="mb-4">
          <h2 class="text-lg font-semibold 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
            {{ text.title }}
          </h2>
        </div>
        <!-- Card Description -->
        <div class="mb-12">
          <p class="2xl:text-lg 3xl:text-xl 4xl:text-2xl">
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
