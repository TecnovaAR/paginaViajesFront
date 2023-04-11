<template>
  <div class="shadow-lg shadow-black">
    <!-- Image -->
    <div class="md:h-60 lg:h-64 3xl:h-76 5xl:h-96">
      <img :src="'src/assets/img/' + cardContent.url" alt="Card Image" class="h-full w-full" />
    </div>

    <!-- Content -->
    <div class="px-4 py-6 lg:py-8 xl:px-6 3xl:px-10">
      <div>
        <!-- Title -->
        <h3 class="mb-4 text-lg font-medium md:text-xl 2xl:text-2xl 3xl:text-3xl">
          {{ cardContent.title }}
        </h3>
        <!-- Description -->
        <p class="mb-8 font-light 2xl:text-lg 3xl:text-xl 4xl:text-2xl">
          {{ cardContent.description }}
        </p>
      </div>

      <!-- Button -->
      <div class="flex items-center justify-center">
        <a
          class="rounded border border-black bg-transparent px-8 py-1 text-sm font-semibold uppercase text-black duration-300 ease-in-out hover:cursor-pointer hover:border-white hover:bg-black hover:text-white hover:transition-all 2xl:text-base 3xl:text-lg 4xl:text-xl"
        >
          Consultar
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardTreeCarousel',
  props: {
    cardContent: Object
  },
  setup() {
    return {}
  }
}
</script>
