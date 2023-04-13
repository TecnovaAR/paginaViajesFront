<template>
  <div
    class="mx-4 my-10 md:mx-8 md:mb-0 md:flex md:gap-5 lg:mx-auto lg:mt-20 lg:max-w-screen-md xl:max-w-screen-lg xl:gap-10 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
  >
    <div class="mb-6 md:basis-1/2">
      <h2
        class="mb-4 text-xl font-medium xl:mb-6 xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl"
      >
        TIEMPOS COMPARTIDOS
      </h2>

      <h1
        class="mb-4 font-playfair text-3xl font-bold md:text-4xl xl:mb-10 xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl"
      >
        {{ content.title }}
      </h1>

      <div
        class="flex w-full justify-between text-4xl md:justify-start md:gap-10 2xl:text-5xl 4xl:text-6xl 5xl:text-7xl"
      >
        <a v-for="link in content.social" :href="link.to">
          <font-awesome-icon :icon="['fab', link.name]" style="color: #0069b5" />
        </a>
      </div>
    </div>

    <div class="md:basis-1/2 4xl:h-160 5xl:h-180">
      <img :src="content.image" alt="Image" class="h-full w-full" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageRight',
  props: {
    content: Object
  }
}
</script>
