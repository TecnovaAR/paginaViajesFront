<template>
  <div
    class="absolute left-0 top-0 z-3 w-full py-5 text-center text-white lg:bg-transparent"
    :class="{ 'bg-black': !menu, 'bg-transparent': menu }"
  >
    <!-- Navbar Content -->
    <div class="mx-4 flex h-full items-center justify-between lg:mx-10 xl:mx-32">
      <!-- Logo -->
      <div class="w-full lg:w-auto">
        <h2
          class="font-playfair text-2xl font-semibold italic 2xl:text-3xl 4xl:text-4xl 5xl:text-5xl"
        >
          LOGO
        </h2>
      </div>

      <!-- Menu Hamburger -->
      <div @click="menu = !menu" class="relative right-0 cursor-pointer text-white lg:hidden">
        <span
          class="mx-auto my-1 block h-1 w-6 bg-white transition-all duration-300 ease-in-out"
          :class="{ 'rotate-45': !menu, 'translate-y-2': !menu }"
        ></span>
        <span
          class="mx-auto my-1 block h-1 w-6 bg-white transition-all duration-300 ease-in-out"
          :class="{ 'opacity-0': !menu }"
        ></span>
        <span
          class="mx-auto my-1 block h-1 w-6 bg-white transition-all duration-300 ease-in-out"
          :class="{ '-rotate-45': !menu, '-translate-y-2': !menu }"
        ></span>
      </div>

      <!-- Navbar -->
      <div>
        <nav
          class="absolute left-0 top-16 flex w-full flex-col bg-black py-4 text-center shadow-lg transition duration-300 lg:relative lg:top-0 lg:block lg:w-auto lg:flex-row lg:items-center lg:justify-between lg:bg-transparent lg:py-0 lg:shadow-none lg:transition-none"
          :class="{ hidden: menu }"
        >
          <!-- Navbar links -->
          <router-link
            v-for="link in links"
            :key="link.name"
            class="inline-block p-4 uppercase hover:text-white-500 2xl:text-xl 4xl:text-2xl 5xl:text-3xl"
            :class="{ 'hover:text-white-500': !menu }"
            :to="link.to"
            :label="link.name"
          >
            {{ link.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

const menu = ref(true)

export default {
  name: 'Navbar',
  setup() {
    return {
      menu,
      links: [
        { name: 'Inicio', to: '#' },
        { name: 'Tiempos compartidos', to: '#' },
        { name: 'Destinos', to: '#' },
        { name: 'Sobre nosotros', to: '#' },
        { name: 'Contacto', to: '#' }
      ]
    }
  }
}
</script>
