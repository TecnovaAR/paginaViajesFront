<template>
  <div
    class="flex flex-col items-center justify-center bg-black px-4 py-10 text-white md:flex-row md:flex-wrap md:items-start lg:flex-col lg:flex-nowrap lg:items-center 4xl:py-16"
  >
    <div
      class="flex flex-col items-center justify-center md:basis-1/2 lg:mb-10 lg:w-full lg:max-w-screen-lg lg:flex-row lg:justify-between 4xl:max-w-screen-3xl"
    >
      <div class="mb-6 lg:mb-0">
        <h2 class="font-playfair text-3xl font-semibold md:text-4xl 4xl:text-5xl">LOGO</h2>
      </div>

      <div class="flex flex-col items-center justify-center lg:flex-row lg:gap-5 4xl:gap-20">
        <a
          v-for="link in footerContent.links"
          class="mb-3 uppercase hover:text-white-500 md:text-lg lg:mb-0 4xl:text-xl"
          :href="link.to"
        >
          {{ link.name }}
        </a>
      </div>

      <div>
        <a class="uppercase hover:text-white-500 md:text-lg 4xl:text-xl" href="#">
          Iniciar sesión
        </a>
      </div>
    </div>

    <div
      class="mt-6 flex flex-col items-center justify-center md:mt-0 md:basis-1/2 lg:mb-10 lg:mt-0 lg:w-full lg:max-w-screen-lg lg:flex-row lg:items-end lg:justify-between 4xl:max-w-screen-3xl"
    >
      <div
        v-for="column in footerContent.columns"
        class="mb-3 lg:mb-0 4xl:basis-1/4 4xl:text-center"
      >
        <p v-for="text in column" class="mb-1 md:text-lg lg:last-of-type:mb-0 4xl:text-xl">
          {{ text }}
        </p>
      </div>

      <div class="justi flex items-center justify-center gap-5 4xl:basis-1/4">
        <font-awesome-icon :icon="['fab', 'facebook']" class="text-2xl 4xl:text-3xl" />
        <font-awesome-icon :icon="['fab', 'instagram']" class="text-2xl 4xl:text-3xl" />
        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl 4xl:text-3xl" />
        <font-awesome-icon :icon="['fab', 'youtube']" class="text-2xl 4xl:text-3xl" />
      </div>
    </div>

    <div
      class="mt-6 flex flex-col items-center justify-center text-center lg:w-full lg:max-w-screen-lg lg:flex-row-reverse lg:items-end lg:justify-between 4xl:max-w-screen-3xl"
    >
      <div class="mb-6 lg:mb-0 lg:flex lg:gap-5">
        <p class="mb-3 uppercase md:text-lg lg:mb-0 lg:text-base 4xl:text-lg">
          AVISO DE PRIVACIDAD
        </p>
        <p class="uppercase md:text-lg lg:text-base 4xl:text-lg">TÉRMINOS Y CONDICIONES</p>
      </div>

      <div>
        <p class="md:text-lg lg:text-base 4xl:text-lg">
          agenciadeviajes.com.mx ® Todos los Derechos Reservados 2023
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    footerContent: Object
  },
  setup() {
    return {}
  }
}
</script>
