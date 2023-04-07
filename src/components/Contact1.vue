<template>
  <div class="mx-4 py-10">
    <div
      class="flex flex-col items-center justify-center text-center md:flex-row md:items-start md:gap-10"
    >
      <div class="mt-6 flex flex-col items-center justify-center md:w-1/2 md:text-end xl:items-end">
        <h2 class="text-3xl font-bold uppercase md:w-full md:text-4xl xl:text-5xl 3xl:text-6xl">
          Contáctanos
        </h2>
        <h3 class="mt-6 text-lg font-light md:text-xl xl:w-3/4 xl:text-2xl 3xl:text-4xl">
          {{ textContent.description }}
        </h3>
      </div>

      <div class="mt-6 flex flex-col items-center justify-center md:w-1/2">
        <div
          class="flex w-full items-center justify-center gap-5 text-3xl md:justify-start md:text-4xl xl:text-5xl 3xl:text-6xl"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" style="color: #4b03a6" />
          <font-awesome-icon :icon="['fab', 'instagram']" style="color: #4b03a6" />
          <font-awesome-icon :icon="['fab', 'linkedin']" style="color: #4b03a6" />
          <font-awesome-icon :icon="['fab', 'youtube']" style="color: #4b03a6" />
        </div>

        <div class="mx-6 mt-6 md:mx-auto md:w-full">
          <div class="mb-3 flex items-center justify-start gap-5">
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              style="color: #4b03a6"
              class="text-3xl md:text-3xl xl:text-4xl 3xl:text-5xl"
            />
            <p class="text-start lg:text-lg 2xl:text-xl 4xl:text-2xl">
              {{ textContent.email }}
            </p>
          </div>
          <div class="mb-3 flex items-center justify-start gap-5">
            <font-awesome-icon
              :icon="['fas', 'mobile']"
              style="color: #4b03a6"
              class="text-3xl md:text-3xl xl:text-4xl 3xl:text-5xl"
            />
            <p class="text-start lg:text-lg 2xl:text-xl 4xl:text-2xl">
              {{ textContent.phone }}
            </p>
          </div>
          <div class="mb-3 flex items-center justify-start gap-5">
            <font-awesome-icon
              :icon="['fas', 'location-dot']"
              style="color: #4b03a6"
              class="text-3xl md:text-3xl xl:text-4xl 3xl:text-5xl"
            />
            <p class="text-start lg:text-lg xl:w-3/4 2xl:text-xl 4xl:text-2xl">
              {{ textContent.address }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact1',
  props: {
    textContent: Object
  },
  setup() {
    return {}
  }
}
</script>
