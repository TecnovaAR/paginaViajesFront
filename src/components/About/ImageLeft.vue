<template>
  <div class="mx-4 mb-10 md:mx-8 md:mb-20 lg:mx-0 lg:flex lg:gap-10 4xl:mb-32">
    <div class="mb-6 lg:mb-0 lg:basis-5/12">
      <img :src="content.image" alt="Image" class="h-full w-full" />
    </div>

    <div class="lg:flex lg:basis-7/12 lg:flex-col lg:justify-center lg:py-20 3xl:py-28">
      <div
        v-for="paragraph in content.paragraphs"
        class="mb-6 lg:mb-10 lg:w-5/6 lg:last-of-type:mb-0 3xl:mb-16"
      >
        <h2
          class="mb-3 text-2xl font-semibold text-primary md:text-3xl lg:text-4xl 2xl:text-5xl 4xl:text-6xl 5xl:text-7xl"
        >
          {{ paragraph.title }}
        </h2>

        <p class="text-lg 2xl:text-xl 3xl:text-2xl 4xl:mb-12 4xl:text-3xl 5xl:text-4xl">
          {{ paragraph.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageLeft',
  props: {
    content: Object
  }
}
</script>
