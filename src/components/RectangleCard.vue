<template>
  <div class="mx-4 flex h-auto flex-col md:flex-row 3xl:h-120 4xl:max-w-screen-3xl">
    <div
      class="flex w-full flex-col items-start justify-center bg-[url(src/assets/img/cta1.png)] p-10 brightness-90 md:basis-3/4 lg:p-12 2xl:p-20"
    >
      <!-- Card Title -->
      <div class="mb-6 4xl:mb-10">
        <h2
          class="text-left text-2xl font-semibold text-white md:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl"
        >
          Lorem ipsum dolor sit amet
        </h2>
      </div>

      <!-- Card Description -->
      <div class="mb-6 4xl:mb-10">
        <p class="text-left text-lg text-white 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin
          consequat, dui velit placerat ex, et tincidunt ipsum nibh nec risus.
        </p>
      </div>

      <!-- Card Button -->
      <div class="w-full md:w-auto">
        <a
          class="md:text-md block w-full rounded border border-white bg-transparent px-8 py-1 text-center text-sm font-semibold uppercase text-white hover:cursor-pointer hover:bg-white-500 lg:text-lg 4xl:px-12 4xl:text-xl 5xl:text-2xl"
        >
          Cotizar
        </a>
      </div>
    </div>

    <div
      class="flex w-full flex-col items-center justify-center bg-primary p-8 text-center text-white md:w-1/4 md:basis-2/4 md:p-10"
    >
      <CardCarousel :cardContent="cardContent" />
    </div>
  </div>
</template>

<script>
import CardCarousel from '@/components/CardCarousel.vue'

export default {
  name: 'RectangleCard',
  props: {
    cardContent: Object
  },
  components: {
    CardCarousel
  },
  setup() {
    return {}
  }
}
</script>
