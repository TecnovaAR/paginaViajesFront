<template>
  <div class="mx-4 flex justify-center md:mx-10 md:pt-20 xl:mx-20 4xl:pt-32">
    <div
      class="flex flex-col items-center justify-center gap-5 md:flex-row lg:max-w-screen-md xl:max-w-screen-lg xl:gap-20 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
    >
      <div
        class="flex w-2/3 items-center justify-center md:basis-2/6 2xl:h-5/6 2xl:basis-5/12 3xl:h-auto 3xl:basis-2/6"
      >
        <img src="src/assets/img/OTHERS/TEAM.png" alt="Team Image" class="h-full rounded-full" />
      </div>

      <div class="mb-2 text-center md:basis-4/6 md:text-left 2xl:basis-7/12 3xl:basis-2/5">
        <h2
          class="5xl:text-7x mb-6 text-2xl font-semibold text-primary md:text-3xl lg:text-4xl 2xl:text-5xl 4xl:text-6xl"
        >
          {{ content.title }}
        </h2>
        <p class="mb-6 xl:text-xl 4xl:text-2xl">
          {{ content.description }}
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
  props: {
    content: Object
  },
  setup() {
    return {}
  }
}
</script>
