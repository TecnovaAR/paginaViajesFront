<template>
  <div
    class="flex flex-col items-center justify-center md:mx-10 md:flex-row md:items-start md:gap-5 lg:mx-0 lg:max-w-screen-lg lg:gap-8 2xl:gap-14 4xl:max-w-screen-3xl"
  >
    <div class="mt-6 flex flex-col items-center justify-center md:basis-1/2">
      <h2
        class="text-center text-3xl font-bold uppercase md:w-full md:text-start md:text-5xl xl:text-6xl 3xl:text-7xl 4xl:text-8xl"
      >
        Contáctanos
      </h2>
      <div
        class="mt-6 flex w-full items-center justify-center gap-5 text-3xl md:justify-start md:text-4xl xl:text-5xl 3xl:text-6xl"
      >
        <font-awesome-icon :icon="['fab', 'facebook']" style="color: #4b03a6" />
        <font-awesome-icon :icon="['fab', 'instagram']" style="color: #4b03a6" />
        <font-awesome-icon :icon="['fab', 'linkedin']" style="color: #4b03a6" />
        <font-awesome-icon :icon="['fab', 'youtube']" style="color: #4b03a6" />
      </div>
    </div>
    <div class="ml-6 mt-6 flex flex-col md:basis-1/2">
      <div class="mb-3 flex items-center justify-start gap-5">
        <font-awesome-icon
          :icon="['fas', 'envelope']"
          style="color: #4b03a6"
          class="text-3xl md:text-3xl xl:text-4xl 3xl:text-5xl"
        />
        <p class="text-start lg:text-lg 2xl:text-xl 4xl:text-2xl">
          {{ contactInfo.email }}
        </p>
      </div>
      <div class="mb-3 flex items-center justify-start gap-5">
        <font-awesome-icon
          :icon="['fas', 'mobile']"
          style="color: #4b03a6"
          class="text-3xl md:text-3xl xl:text-4xl 3xl:text-5xl"
        />
        <p class="text-start lg:text-lg 2xl:text-xl 4xl:text-2xl">
          {{ contactInfo.phone }}
        </p>
      </div>
      <div class="mb-3 flex items-center justify-start gap-5">
        <font-awesome-icon
          :icon="['fas', 'location-dot']"
          style="color: #4b03a6"
          class="text-3xl md:text-3xl xl:text-4xl 3xl:text-5xl"
        />
        <p class="text-start lg:text-lg xl:w-3/4 2xl:text-xl 4xl:text-2xl">
          {{ contactInfo.address }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact2',
  props: {
    contactInfo: Object
  },
  setup() {}
}
</script>
