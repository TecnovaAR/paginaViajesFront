<template>
  <div
    class="mx-4 mt-10 flex flex-col items-center justify-center md:mx-8 md:mt-20 md:items-start md:gap-5 lg:mx-auto lg:max-w-screen-md lg:gap-10 xl:max-w-screen-lg 4xl:my-32 4xl:max-w-screen-xl 5xl:max-w-screen-2xl"
  >
    <div class="mb-8 flex flex-col items-center justify-center sm:w-full sm:flex-row lg:mb-0">
      <h2
        class="mb-4 w-full text-center text-xl font-medium sm:mb-0 sm:basis-1/2 sm:text-start xl:text-2xl 4xl:text-3xl"
      >
        TIEMPOS COMPARTIDOS
      </h2>

      <div class="flex justify-end sm:basis-1/2">
        <a
          href="/sharedTimes"
          class="rounded border border-black bg-transparent px-6 py-1 text-sm font-semibold uppercase text-black duration-300 ease-in-out hover:cursor-pointer hover:border-white hover:bg-black hover:text-white hover:transition-all 4xl:text-base"
        >
          VER TIEMPOS COMPARTIDOS
        </a>
      </div>
    </div>

    <div class="md:w-full">
      <div class="mb-8 w-full text-center md:mb-0 md:text-start">
        <h2
          class="font-playfair text-5xl font-bold sm:text-6xl lg:text-7xl 2xl:text-8xl 4xl:text-9xl"
        >
          Contáctanos
        </h2>
      </div>
    </div>

    <div class="md:flex md:w-full md:justify-between">
      <div
        class="mb-8 flex w-full justify-between text-4xl md:mb-0 md:basis-1/2 md:justify-start md:gap-10 lg:justify-stretch lg:gap-5 4xl:text-5xl 5xl:text-6xl"
      >
        <a v-for="link in social" :href="link.to">
          <font-awesome-icon :icon="['fab', link.name]" style="color: #0069b5" />
        </a>
      </div>

      <div class="md:basis-1/2">
        <div class="mb-3 flex items-center justify-center gap-2">
          <div class="flex w-1/12 justify-center">
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              style="color: #0069b5"
              class="text-2xl 4xl:text-3xl 5xl:text-4xl"
            />
          </div>
          <div class="w-11/12 4xl:text-lg 5xl:text-xl">
            <p>name@mail.com</p>
          </div>
        </div>
        <div class="mb-3 flex items-center justify-center gap-2">
          <div class="flex w-1/12 justify-center">
            <font-awesome-icon
              :icon="['fas', 'mobile']"
              style="color: #0069b5"
              class="text-2xl 4xl:text-3xl 5xl:text-4xl"
            />
          </div>
          <div class="w-11/12 4xl:text-lg 5xl:text-xl">
            <p>+52 442 123 4567</p>
          </div>
        </div>
        <div class="flex items-center justify-center gap-2">
          <div class="flex w-1/12 justify-center">
            <font-awesome-icon
              :icon="['fas', 'location-dot']"
              style="color: #0069b5"
              class="text-2xl 4xl:text-3xl 5xl:text-4xl"
            />
          </div>
          <div class="w-11/12 4xl:text-lg 5xl:text-xl">
            <p>
              Av Fray Luis de León 8051, Centro Sur 76090 Querétaro Centro, Querétaro Arteaga,
              México.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  setup() {
    return {
      social: [
        { name: 'facebook', to: '#' },
        { name: 'instagram', to: '#' },
        { name: 'linkedin', to: '#' },
        { name: 'youtube', to: '#' }
      ]
    }
  }
}
</script>
