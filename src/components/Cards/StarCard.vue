<template>
  <div class="flex flex-col items-center justify-start py-10 text-center lg:mb-14 3xl:mb-20">
    <font-awesome-icon
      :icon="['far', 'star']"
      class="mb-3 text-5xl lg:text-6xl xl:mb-6 xl:text-7xl 5xl:text-8xl"
    />

    <h3 class="mb-3 text-2xl font-semibold text-primary xl:mb-6 xl:text-3xl 4xl:text-4xl">
      {{ cardContent.title }}
    </h3>

    <p class="xl:text-lg 2xl:text-xl 4xl:text-2xl 5xl:text-3xl">{{ cardContent.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'StarCard',
  props: { cardContent: Object }
}
</script>
