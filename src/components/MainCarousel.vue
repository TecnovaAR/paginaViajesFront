<template>
  <swiper :slidesPerView="1" :loop="true" :navigation="true" class="swiperMain" :modules="modules">
    <!-- Slides -->
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div
        class="flex h-120 w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white sm:h-140 lg:h-180 4xl:h-240"
        :class="slide.bgClass"
      >
        <div class="w-5/6">
          <div class="mb-3 md:mb-5 lg:mb-7 5xl:mb-9">
            <h3
              class="text-xl font-medium uppercase md:text-3xl lg:text-4xl xl:text-5xl 4xl:text-6xl 5xl:text-7xl"
            >
              Tiempo compartido en
            </h3>
          </div>

          <div class="mb-10 md:mb-16 lg:mb-24 5xl:mb-32">
            <h2
              class="font-playfair text-3xl font-bold md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 4xl:text-9xl 5xl:text-10xl"
            >
              {{ slide.text }}
            </h2>
          </div>

          <div>
            <a
              class="md:text-md rounded border border-white bg-transparent px-4 py-1 text-sm font-semibold uppercase text-white hover:cursor-pointer hover:bg-white-500 lg:text-lg 4xl:border-2 4xl:py-2 4xl:text-xl 5xl:text-3xl"
            >
              Cotizar
            </a>
          </div>
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
import 'swiper/css/navigation'

// Import required modules
import { Navigation } from 'swiper'

export default {
  name: 'MainCarousel',
  props: {
    slides: Object
  },
  setup() {
    return {
      modules: [Navigation]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
