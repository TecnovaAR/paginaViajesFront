<template>
  <div class="mx-4 flex justify-center md:mx-10 xl:mx-20">
    <div
      class="flex flex-col items-center justify-center gap-5 md:flex-row lg:max-w-screen-lg xl:max-w-screen-xl xl:gap-20 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl 4xl:max-w-screen-4xl 5xl:max-w-screen-5xl"
    >
      <div class="flex w-2/3 items-center justify-center md:w-full md:basis-1/4 xl:basis-1/3">
        <img src="src/assets/img/team1.png" alt="" class="rounded-full" />
      </div>

      <div class="mb-2 text-center md:basis-3/4 md:text-left xl:basis-2/3">
        <h2 class="mb-6 text-2xl font-semibold text-primary xl:text-3xl 4xl:text-4xl">
          Lorem ipsum dolor sit amet
        </h2>
        <p class="mb-6 xl:text-xl 4xl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin
          consequat, dui velit placerat ex, et tincidunt ipsum nibh nec risus.
        </p>
        <a
          class="rounded border border-black bg-transparent px-8 py-1 text-sm font-semibold uppercase text-black duration-300 ease-in-out hover:cursor-pointer hover:border-white hover:bg-black hover:text-white hover:transition-all 2xl:text-base 3xl:text-lg 4xl:text-xl"
        >
          Contactar
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  setup() {
    return {}
  }
}
</script>
