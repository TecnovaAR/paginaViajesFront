<template>
  <div class="shadow-lg shadow-black">
    <!-- Image -->
    <div>
      <img src="src/assets/img/destino1.png" alt="Card Image" class="w-full" />
    </div>

    <!-- Content -->
    <div class="px-4 py-6">
      <div>
        <!-- Title -->
        <h3 class="mb-4 text-lg font-medium 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
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
          Cotizar
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
