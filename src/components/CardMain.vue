<template>
  <div class="relative z-2 -mt-20 w-auto rounded-md border bg-white-700 shadow-lg">
    <!-- Header -->
    <div
      class="flex items-center justify-center py-5 font-playfair text-xl italic md:text-2xl 4xl:text-3xl"
    >
      <img src="src/assets/icons/star.svg" class="h-10 w-auto" alt="Star Icon" />
      <h4 class="ml-2">Lorem Ipsum</h4>
    </div>

    <!-- Content -->
    <div class="px-4 py-6 text-center">
      <div class="mb-4 text-xl font-medium text-primary md:text-2xl 4xl:text-3xl">
        <h3>Lorem Impsu Dolor Sit Amet</h3>
      </div>

      <div class="4xl:text-xl">
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis id est aliquam
          porttitor.
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiStarOutline } from '@mdi/js'

export default {
  name: 'CardMain',
  setup() {
    return {
      star: mdiStarOutline
    }
  },
  components: {
    SvgIcon
  }
}
</script>
