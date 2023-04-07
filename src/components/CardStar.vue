<template>
  <div class="mb-10 flex flex-col items-center justify-start text-center lg:mb-14 3xl:mb-20">
    <font-awesome-icon :icon="['far', 'star']" class="mb-3 text-4xl xl:text-5xl 4xl:text-7xl" />

    <h3 class="mb-3 text-2xl font-semibold text-primary 4xl:text-3xl">{{ cardContent.title }}</h3>

    <p class="4xl:text-xl">{{ cardContent.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardStar',
  props: { cardContent: Object },
  setup() {}
}
</script>
