<template>
  <div>
    <Navbar />

    <!-- Header -->
    <header>
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :navigation="true"
        class="swiper"
        :modules="modules"
      >
        <!-- Slides -->
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="h-120 w-full bg-cover bg-center" :class="slide.bgClass"></div>
        </swiper-slide>

        <!-- Text -->
        <div class="swiper-text w-5/6">
          <div>
            <h2 class="text-2xl font-medium uppercase text-white">Viaja a europa</h2>
            <p class="mt-3 font-playfair text-4xl font-bold text-white">Lorem Ipsum Dolor</p>
            <p class="mt-5 text-xl uppercase text-white">
              Desde <span class="font-bold">$30,000MXN</span>
            </p>
          </div>
          <div class="mt-7">
            <a
              class="rounded border border-white bg-transparent px-6 py-1 font-semibold text-white"
            >
              Cotizar
            </a>
          </div>
        </div>
      </swiper>
    </header>

    <!-- Main -->
    <main>
      <div class="container mx-auto">
        <div class="flex flex-col items-center justify-center">
          <h2 class="text-center text-2xl font-medium uppercase">Lorem ipsum dolor sit amet</h2>
          <p class="mt-3 text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'

// Import Navbar component
import Navbar from '../components/Navbar.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Import required modules
import { Navigation } from 'swiper'

let slides = [
  { bgClass: 'bg-heroPattern1' },
  { bgClass: 'bg-heroPattern2' },
  { bgClass: 'bg-heroPattern3' },
  { bgClass: 'bg-heroPattern4' }
]

export default {
  name: 'HomeView',
  setup() {
    return {
      modules: [Navigation],
      slides
    }
  },
  components: {
    Navbar,
    Swiper,
    SwiperSlide
  }
}
</script>

<!-- <div class="flex items-center justify-center">
  <div class="text-center">
    <h2 class="text-2xl font-bold uppercase text-white">Viaja a europa</h2>
    <p class="font-playfair text-4xl font-bold uppercase leading-10 text-white">
      Lorem ipsum dolor
    </p>
  </div>
</div> -->
