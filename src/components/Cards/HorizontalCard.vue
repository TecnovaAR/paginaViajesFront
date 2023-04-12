<template>
  <div class="flex flex-col items-center justify-center md:flex-row">
    <div
      class="h-52 w-full bg-cover bg-center md:h-full xl:basis-5/12 5xl:h-80"
      :style="'background-image: url(' + cardContent.url + ')'"
    ></div>

    <div class="flex flex-col justify-between bg-white p-5 md:h-full xl:basis-7/12">
      <h2 class="mb-4 mt-2 font-medium xl:text-xl 3xl:text-2xl 5xl:w-3/4 5xl:text-3xl">
        {{ cardContent.title }}
      </h2>

      <p class="mb-4 text-sm 3xl:text-base 4xl:text-lg 5xl:text-2xl">
        {{ cardContent.description }}
      </p>

      <div class="mx-auto w-3/4 flex-wrap items-end md:flex md:w-full md:justify-between">
        <div>
          <a
            href="#"
            class="block rounded border border-black bg-transparent px-6 py-2 text-center text-xs font-semibold uppercase text-black duration-300 ease-in-out hover:cursor-pointer hover:border-white hover:bg-black hover:text-white hover:transition-all md:px-8 md:py-1 4xl:px-10 4xl:text-base 5xl:text-lg"
          >
            Cotizar
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalCard',
  props: {
    cardContent: Object
  }
}
</script>
