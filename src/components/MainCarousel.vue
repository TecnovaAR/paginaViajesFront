<template>
  <swiper :slidesPerView="1" :loop="true" :navigation="true" class="swiperMain" :modules="modules">
    <!-- Slides -->
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div
        class="h-120 w-full bg-cover bg-center sm:h-140 lg:h-180 4xl:h-240"
        :class="slide.bgClass"
      ></div>
    </swiper-slide>

    <div class="swiper-text w-5/6">
      <div class="mb-3 md:mb-5 lg:mb-7 5xl:mb-9">
        <h3
          class="text-2xl font-medium uppercase md:text-3xl lg:text-4xl xl:text-5xl 4xl:text-6xl 5xl:text-7xl"
        >
          Viaja a europa
        </h3>
      </div>

      <div class="mb-3 md:mb-5 lg:mb-7 5xl:mb-9">
        <h2
          class="font-playfair text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 4xl:text-8xl 5xl:text-9xl"
        >
          Lorem Ipsum Dolor
        </h2>
      </div>

      <div class="mb-5 md:mb-7 lg:mb-9 5xl:mb-11">
        <p class="text-xl uppercase md:text-2xl lg:text-3xl xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
          Desde <span class="font-extrabold">$30,000MXN</span>
        </p>
      </div>

      <div>
        <a
          class="md:text-md rounded border border-white bg-transparent px-8 py-1 text-sm font-semibold uppercase text-white hover:cursor-pointer hover:bg-white-500 lg:text-lg 4xl:text-xl 5xl:text-2xl"
        >
          Cotizar
        </a>
      </div>
    </div>
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
