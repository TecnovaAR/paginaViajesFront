<template>
  <div class="flex w-full justify-center">
    <div
      class="relative mx-4 my-20 flex h-96 w-full items-center justify-center bg-[url(src/assets/img/OTHERS/BACKGROUND_1.png)] bg-cover bg-center md:h-72 md:max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-2xl 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
    >
      <div
        style="background: rgba(48, 48, 48, 0.6)"
        class="absolute flex h-full w-full flex-col items-center justify-center p-4 text-start text-white"
      >
        <div class="mb-4 flex w-full items-center justify-start">
          <h2 class="text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl 5xl:text-6xl">
            {{ content.title }}
          </h2>
        </div>
        <div class="mb-4 flex w-full items-center justify-start">
          <p class="text-lg 3xl:text-3xl 5xl:text-5xl">
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
