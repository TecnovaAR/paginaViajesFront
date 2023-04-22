<template>
  <div class="w-full shadow-md shadow-black md:mx-0">
    <div class="md:h-60 4xl:h-72">
      <img :src="cardContent.url" alt="Card Image" class="h-full w-full" />
    </div>
    <div class="h-64 w-full bg-white p-4 lg:p-6 3xl:p-8 4xl:p-10 flex flex-col justify-between">
      <div>
        <!-- Title -->
        <h3
          class="mb-4 text-lg font-medium lg:text-xl 3xl:text-2xl 4xl:mb-8 4xl:text-3xl 5xl:text-4xl"
        >
          {{ cardContent.title }}
        </h3>
        <!-- Description -->
        <p class="mb-6 font-light 4xl:text-lg 5xl:text-xl line-clamp-3">
          {{ cardContent.description }}
        </p>
      </div>

      <!-- Button -->
      <div class="flex items-center justify-center">
        <a
          :href="cardContent.to"
          class="rounded border border-black bg-transparent px-8 py-1 text-sm font-semibold uppercase text-black duration-300 ease-in-out hover:cursor-pointer hover:border-white hover:bg-black hover:text-white hover:transition-all 4xl:text-base"
        >
          Consultar
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeCarouselCard',
  props: {
    cardContent: Object
  },
  methods: {
    truncateWords(text, limit) {
      const words = text.split(' ');
      if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
      }
      return text;
    },
  },
}
</script>
