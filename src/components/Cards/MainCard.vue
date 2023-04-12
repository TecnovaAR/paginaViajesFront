<template>
  <div
    class="relative z-2 -mt-20 rounded-md bg-white/70 shadow-md shadow-white-500 4xl:-mt-28 5xl:-mt-32"
  >
    <!-- Header -->
    <div class="flex items-center justify-center gap-4 px-4 py-6 text-center 4xl:py-10">
      <div class="flex h-fit items-center justify-center">
        <font-awesome-icon :icon="['far', 'star']" class="text-4xl 5xl:text-6xl" />
      </div>
      <h3 class="text-2xl italic 3xl:text-3xl 5xl:text-5xl">Lorem Impsum</h3>
    </div>

    <!-- Content -->
    <div class="px-4 py-8 text-center 2xl:px-8 2xl:py-12 5xl:py-16">
      <!-- Subtitle -->
      <div class="mb-4">
        <h3 class="text-2xl font-medium text-primary 3xl:text-3xl 5xl:text-5xl">
          Lorem Impsu Dolor Sit Amet
        </h3>
      </div>

      <!-- Description -->
      <div>
        <p class="3xl:text-lg 5xl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis id est aliquam
          porttitor.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCard',
  props: {
    content: Object
  }
}
</script>
