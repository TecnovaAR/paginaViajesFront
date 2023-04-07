<template>
  <div
    class="just flex h-64 w-full items-center justify-center bg-heroPattern1 bg-cover bg-center lg:h-96 2xl:h-120 4xl:h-150 5xl:h-170"
  >
    <h2
      class="text-center font-playfair text-3xl font-bold uppercase text-white md:text-4xl lg:text-5xl 2xl:text-6xl 4xl:text-7xl 5xl:text-8xl"
    >
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HeroThirdLayout',
  props: {
    title: String
  }
}
</script>
