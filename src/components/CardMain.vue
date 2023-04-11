<template>
  <div class="relative z-2 -mt-20 w-auto rounded-md border bg-white-700 shadow-lg">
    <!-- Header -->
    <div class="flex items-center justify-center px-4 py-4 text-center font-playfair">
      <img src="src/assets/icons/star.svg" class="h-12 w-auto" alt="Star Icon" />
      <h4 class="ml-2 text-xl italic md:text-2xl 4xl:text-3xl">{{ cardContent.title }}</h4>
    </div>

    <!-- Content -->
    <div class="px-4 py-8 text-center lg:py-10">
      <div class="mb-4 text-xl font-medium text-primary md:text-2xl 4xl:text-3xl">
        <h3>{{ cardContent.subtitle }}</h3>
      </div>

      <div class="4xl:text-xl">
        <h4>
          {{ cardContent.description }}
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
  props: {
    cardContent: Object
  },
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
