<template>
  <swiper :pagination="pagination" :modules="modules" class="swiperRectangle">
    <swiper-slide v-for="(text, index) in cardContent" :key="index">
      <div class="flex flex-col items-center justify-center text-center text-white">
        <!-- Card Star -->
        <div class="mb-6">
          <font-awesome-icon :icon="['far', 'star']" class="text-5xl 2xl:text-6xl 5xl:text-8xl" />
        </div>
        <!-- Card Title -->
        <div class="mb-4">
          <h2 class="text-lg font-semibold 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl">
            {{ text.title }}
          </h2>
        </div>
        <!-- Card Description -->
        <div class="mb-12 4xl:w-3/4">
          <p class="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl">
            {{ text.desc }}
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

<style>
.swiperRectangle.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiperRectangle .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiperRectangle .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  opacity: 1;
  background: transparent;
  border: 1px solid #f5f5f5;
}

.swiperRectangle .swiper-pagination-bullet-active {
  color: #fff;
  background: #f5f5f5;
}
</style>
