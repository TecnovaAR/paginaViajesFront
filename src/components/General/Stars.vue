<template>
  <div
    class="mx-4 my-5 grid md:grid-cols-2 lg:mx-auto lg:max-w-screen-md lg:grid-cols-4 lg:gap-10 xl:max-w-screen-lg 2xl:max-w-screen-xl 3xl:my-12 3xl:max-w-screen-2xl 4xl:my-24 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
  >
    <StarCard v-for="card in content" :key="card.title" :cardContent="card" />
  </div>
</template>

<script>
import StarCard from '../Cards/StarCard.vue'

export default {
  name: 'Stars',
  props: {
    content: Object
  },
  components: {
    StarCard
  }
}
</script>
