<template>
  <div class="w-full shadow-md shadow-black md:mx-0">
    <div class="md:h-60 2xl:h-80 4xl:h-100 5xl:h-120">
      <img :src="'assets/img/' + cardContent.url" alt="Card Image" class="h-full w-full" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeImagesCarouselCard',
  props: {
    cardContent: Object
  }
}
</script>
