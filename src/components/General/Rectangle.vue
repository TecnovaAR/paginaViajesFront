<template>
  <div class="mx-4 my-20 flex w-auto flex-col justify-center md:flex-row">
    <div
      class="md:flex md:max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-xl 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
    >
      <div
        class="relative flex h-96 w-full flex-col items-center justify-center bg-[url(src/assets/img/OTHERS/BACKGROUND_1.png)] bg-cover bg-center md:h-80 md:basis-3/4 3xl:h-96 4xl:h-120"
      >
        <!-- Rectangle -->
        <div
          style="background: rgba(48, 48, 48, 0.6)"
          class="absolute flex h-full w-full flex-col items-center justify-center p-4 text-start text-white lg:p-12"
        >
          <div class="mb-4 flex w-full items-center justify-start 3xl:mb-8 4xl:mb-12">
            <h2
              class="text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl 4xl:text-6xl 5xl:text-7xl"
            >
              {{ content.title }}
            </h2>
          </div>
          <div class="mb-4 flex w-full items-center justify-start 3xl:mb-8">
            <p class="text-lg 2xl:text-xl 3xl:text-2xl 4xl:mb-12 4xl:text-3xl 5xl:text-4xl">
              {{ content.desc }}
            </p>
          </div>
          <div class="flex w-full items-center justify-start">
            <a
              href="#"
              class="rounded border border-white bg-transparent px-4 py-1 text-xs font-semibold uppercase text-white hover:cursor-pointer hover:bg-white-500 2xl:text-base 3xl:border-2 3xl:text-lg 4xl:text-xl 5xl:px-6 5xl:text-2xl"
            >
              Cotizar
            </a>
          </div>
        </div>
      </div>
      <!-- Card Carousel -->
      <div class="h-full w-full bg-primary p-5 md:h-80 md:w-2/6 md:basis-1/4 3xl:h-96 4xl:h-120">
        <CardCarousel :cardContent="content.cards" />
      </div>
    </div>
  </div>
</template>

<script>
import CardCarousel from '../Carousels/CardCarousel.vue'

export default {
  name: 'Rectangle',
  props: {
    content: Object
  },
  components: {
    CardCarousel
  }
}
</script>
