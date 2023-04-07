<template>
  <div class="flex flex-col justify-center bg-[url(src/assets/img/cta2.png)] bg-cover bg-center">
    <div class="bg-white-700">
      <div class="curved h-20 bg-[#fff]"></div>
      <div
        class="flex flex-col items-center justify-center px-4 py-20 text-center lg:py-28 2xl:py-32 4xl:py-40"
      >
        <h2 class="mb-6 text-2xl font-semibold xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
          {{ content.title }}
        </h2>
        <p class="mb-6 xl:w-4/6 xl:text-xl 4xl:text-4xl 5xl:text-5xl">
          {{ content.description }}
        </p>
        <a
          class="rounded border border-black bg-transparent px-8 py-1 text-sm font-semibold uppercase text-black duration-300 ease-in-out hover:cursor-pointer hover:border-white hover:bg-black hover:text-white hover:transition-all xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-4xl"
        >
          Cotizar
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Curved',
  props: {
    content: Object
  },
  setup() {
    return {}
  }
}
</script>
