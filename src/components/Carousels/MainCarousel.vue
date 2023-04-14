<template>
  <swiper :slidesPerView="1" :loop="true" :navigation="true" class="swiperMain" :modules="modules">
    <!-- Swiper Slides -->
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div
        class="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center text-white lg:h-[70vh] 2xl:h-[75vh]"
        :style="
          'background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%), url(' +
          slide.url +
          ');'
        "
      >
        <div class="w-4/6 text-center">
          <div class="md:mb-2">
            <h2
              class="text-xl font-medium uppercase md:text-3xl lg:text-4xl 2xl:text-5xl 5xl:text-6xl"
            >
              Tiempo compartido en
            </h2>
          </div>

          <div class="mb-10 3xl:mb-20 5xl:mb-40">
            <h1
              class="font-playfair text-4xl font-bold md:text-6xl lg:text-7xl 2xl:text-8xl 5xl:text-10xl"
            >
              {{ slide.text }}
            </h1>
          </div>

          <div>
            <a
              :href="slide.to"
              class="rounded border border-white bg-transparent px-4 py-1 text-xs font-semibold uppercase text-white hover:cursor-pointer hover:bg-white-500 2xl:text-base 3xl:border-2 3xl:text-lg 4xl:text-xl 5xl:px-6 5xl:text-2xl"
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

<style>
.swiperMain .swiper-button-prev,
.swiperMain .swiper-button-next {
  color: #fff;
}
</style>
