<template>
  <div class="flex justify-center">
    <div
      class="xl:max-w-screen-x 5xl:max-w-screen-4x mx-4 my-10 flex flex-col items-center justify-center md:max-w-screen-md md:flex-row md:items-start lg:my-12 lg:max-w-screen-lg 2xl:my-20 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl"
    >
      <div class="flex w-full flex-col justify-start 2xl:basis-3/5">
        <h3 class="mb-2 text-xl font-medium uppercase lg:text-2xl 2xl:text-3xl 4xl:text-5xl">
          Agencia de viajes
        </h3>
        <h2
          class="mb-6 font-playfair text-3xl font-bold lg:text-4xl 2xl:w-3/4 2xl:text-5xl 4xl:text-7xl"
        >
          Lorem Impsum, Dolor sit Amet
        </h2>
        <div
          class="mb-6 flex w-full items-center justify-start gap-5 text-2xl md:justify-start md:text-3xl xl:text-4xl 3xl:text-5xl"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" style="color: #4b03a6" />
          <font-awesome-icon :icon="['fab', 'instagram']" style="color: #4b03a6" />
          <font-awesome-icon :icon="['fab', 'linkedin']" style="color: #4b03a6" />
          <font-awesome-icon :icon="['fab', 'youtube']" style="color: #4b03a6" />
        </div>
      </div>
      <div class="2xl:basis-2/5 4xl:basis-2/6">
        <img src="src/assets/img/viaje1.png" alt="Viaje" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trip',
  setup() {}
}
</script>
