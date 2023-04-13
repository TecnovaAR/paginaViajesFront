<template>
  <div class="relative bg-[#fff] py-5">
    <div
      class="relative z-2 mx-4 my-12 grid gap-5 lg:mx-auto lg:max-w-screen-md xl:max-w-screen-lg xl:grid-cols-2 xl:gap-10 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
    >
      <HorizontalCard
        v-for="text in content"
        :key="text.title"
        :cardContent="text"
        :class="{ overHorizontalCard: over }"
      />
    </div>
    <div class="absolute right-0 top-0 h-full w-1/4 md:bg-primary"></div>
    <div v-if="over" class="flex justify-center text-center">
      <button
        class="flex w-20 flex-col items-center justify-center text-lg font-light uppercase text-black hover:cursor-pointer md:w-32 md:text-xl lg:text-2xl 4xl:w-36 4xl:text-3xl"
      >
        Ver más
        <font-awesome-icon
          :icon="['fas', 'circle-chevron-down']"
          class="text-xl text-black md:text-2xl lg:text-3xl 4xl:text-4xl"
        />
      </button>
    </div>
  </div>
</template>

<script>
import HorizontalCard from '../Cards/HorizontalCard.vue'

export default {
  name: 'CardsHorizontal',
  props: {
    content: Object,
    over: Boolean
  },
  components: {
    HorizontalCard
  }
}
</script>

<style>
.overHorizontalCard:nth-child(1) {
  @apply -mt-44;
}

@media (min-width: 1280px) {
  .overHorizontalCard:nth-child(2) {
    @apply -mt-44;
  }
}
</style>
