<template>
  <div
    class="mx-4 my-10 md:mx-8 md:mb-0 md:flex md:gap-5 lg:mx-auto lg:mt-20 lg:max-w-screen-md xl:max-w-screen-lg xl:gap-10 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
  >
    <div class="mb-6 md:mb-0 md:basis-1/2 md:pb-20 2xl:pb-36 4xl:pb-52 5xl:pb-64">
      <div class="mb-6 2xl:w-10/12 3xl:mb-10 3xl:w-full">
        <h2 class="text-xl font-medium xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
          TIEMPOS COMPARTIDOS
        </h2>
      </div>

      <div class="mb-12 xl:mb-20 2xl:w-10/12 3xl:w-full">
        <h1
          class="font-playfair uppercase text-3xl font-bold md:text-4xl xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl"
        >
          {{ content.title }}
        </h1>
      </div>

      <div class="mb-12 xl:mb-20">
        <a
          class="rounded border border-black bg-transparent px-6 py-1 text-sm font-semibold uppercase text-black duration-300 ease-in-out hover:cursor-pointer hover:border-white hover:bg-black hover:text-white hover:transition-all 2xl:text-base 3xl:text-lg 4xl:text-xl"
        >
          Cotizar
        </a>
      </div>

      <div class="2xl:w-11/12 3xl:w-full">
        <p class="xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl">{{ content.desc }}</p>
      </div>
    </div>

    <div class="md:basis-1/2 3xl:flex 3xl:justify-end">
      <img :src="content.image" alt="Image" class="h-full w-full 3xl:w-3/4" />
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
