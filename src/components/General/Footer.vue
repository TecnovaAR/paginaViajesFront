<template>
  <div class="bg-black px-4 py-10 text-white xl:py-20">
    <!-- First Column -->
    <div class="mb-6 flex flex-col md:flex-row">
      <!-- Logo -->
      <a
        href="/"
        class="mb-6 flex h-16 w-full justify-center md:mb-0 md:w-28 md:basis-1/4 lg:w-32 2xl:w-36 3xl:w-44 5xl:w-52"
      >
        <img src="/assets/img/OTHERS/logoWhite.svg" alt="Logo" class="h-full" />
      </a>

      <div
        class="flex flex-col text-center md:basis-3/4 md:flex-row md:items-center md:justify-around 2xl:justify-evenly"
      >
        <div
          v-for="link in content.links"
          class="mb-3 w-full py-1 last-of-type:mb-0 md:mb-0 md:w-auto"
        >
          <a class="uppercase hover:text-white-500 4xl:text-lg 5xl:text-xl" :href="link.to">
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>

    <!-- Second Column -->
    <div class="mb-6 lg:flex lg:justify-around">
      <div
        class="mb-3 flex flex-col text-center md:flex-row md:justify-evenly lg:mb-0 lg:w-full lg:basis-3/4 lg:justify-around"
      >
        <div v-for="col in content.columns" class="mb-3 last-of-type:mb-0 lg:mb-0">
          <div v-for="text in col" class="py-1 4xl:text-lg 5xl:text-xl">
            <p>{{ text }}</p>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center gap-5 lg:basis-1/4 lg:items-end">
        <a v-for="link in content.social" :href="link.to">
          <font-awesome-icon
            :icon="['fab', link.name]"
            class="text-3xl 4xl:text-4xl 5xl:text-5xl"
          />
        </a>
      </div>
    </div>

    <!-- Third Column -->
    <div
      class="flex flex-col text-center md:flex-row md:flex-wrap md:justify-between lg:flex-row-reverse"
    >
      <div
        class="mb-3 py-1 md:mb-3 md:flex md:w-full md:items-center md:justify-around lg:mb-0 lg:w-1/2 xl:justify-evenly 4xl:text-lg 5xl:text-xl"
      >
        <p class="mb-3 hover:cursor-pointer hover:text-white-500 md:mb-0">AVISO DE PRIVACIDAD</p>

        <p class="hover:cursor-pointer hover:text-white-500">TÉRMINOS Y CONDICIONES</p>
      </div>

      <div class="py-1 md:flex md:w-full md:justify-center lg:w-1/2 4xl:text-lg 5xl:text-xl">
        <p>agenciadeviajes.com.mx&nbsp;</p>

        <p>® Todos los Derechos Reservados 2023</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    content: Object
  }
}
</script>
