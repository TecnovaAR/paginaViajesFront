<template>
  <div class="flex flex-col items-center justify-center md:flex-row">
    <div
      class="h-52 w-full bg-[url(src/assets/img/destino1.png)] bg-cover bg-center md:h-full"
    ></div>

    <div class="bg-white p-5">
      <h2 class="mb-6 mt-2 text-lg font-medium md:text-xl 4xl:text-2xl">
        {{ cardContent.title }}
      </h2>

      <p class="mb-6 text-base md:text-lg 4xl:text-xl">
        {{ cardContent.description }}
      </p>

      <div class="flex w-full flex-wrap items-end justify-between">
        <div>
          <p class="text-sm text-primary md:text-base 4xl:text-2xl">Desde</p>
          <p class="font-semibold text-primary md:text-lg 4xl:text-xl">
            {{ cardContent.price }}
          </p>
        </div>

        <div>
          <a
            href="#"
            class="block rounded border border-black bg-transparent px-6 py-1 text-center text-sm font-semibold uppercase text-black duration-300 ease-in-out hover:cursor-pointer hover:border-white hover:bg-black hover:text-white hover:transition-all md:px-8 md:text-base 4xl:px-10 4xl:text-lg"
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
  name: 'CardHorizontal',
  props: {
    cardContent: Object
  },
  setup() {
    return {}
  }
}
</script>
