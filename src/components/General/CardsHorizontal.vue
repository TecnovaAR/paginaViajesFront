<template>
  <div class="relative bg-[#fff] py-5">
    <div
      class="relative z-2 mx-4 my-12 grid gap-5 lg:mx-auto lg:max-w-screen-md xl:max-w-screen-lg xl:grid-cols-2 xl:gap-10 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
    >
      <HorizontalCard v-for="text in content" :key="text.title" :cardContent="text" />
    </div>
    <div class="absolute right-0 top-0 h-full w-1/4 md:bg-primary"></div>
  </div>
</template>

<script>
import HorizontalCard from '../Cards/HorizontalCard.vue'

export default {
  name: 'CardsHorizontal',
  props: {
    content: Object
  },
  components: {
    HorizontalCard
  }
}
</script>
