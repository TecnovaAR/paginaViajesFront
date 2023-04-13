<template>
  <div
    class="flex h-[70vh] w-full flex-col items-center justify-center bg-cover bg-center text-center text-white lg:h-[50vh] 2xl:h-[55vh]"
    :style="
      'background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%), url(' +
      content.backgroundUrl +
      ');'
    "
  >
    <h1
      class="font-playfair text-4xl font-bold md:mx-8 md:text-6xl lg:text-7xl 2xl:text-8xl 5xl:text-10xl"
    >
      {{ content.title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'ThirdHero',
  props: {
    content: Object
  }
}
</script>
