<template>
  <div
    class="fixed left-0 top-0 z-10 w-full py-5 text-center text-white"
    :class="{ 'bg-black': !menu, 'bg-transparent': menu }"
  >
    <!-- Navbar Content -->
    <div class="mx-4 flex h-full items-center justify-between">
      <!-- Logo -->
      <div class="w-full">
        <h2 class="font-playfair text-2xl font-semibold italic">LOGO</h2>
      </div>

      <!-- Menu Hamburger -->
      <div @click="menu = !menu" class="relative right-0 cursor-pointer text-white md:hidden">
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
          class="absolute left-0 top-16 flex w-full flex-col bg-black py-4 text-center shadow-lg transition duration-300"
          :class="{ hidden: menu }"
        >
          <router-link class="inline-block p-4" to="#">Inicio</router-link>
          <router-link class="inline-block p-4" to="#">Personaliza tu viaje</router-link>
          <router-link class="inline-block p-4" to="#">Paquetes</router-link>
          <router-link class="inline-block p-4" to="#">Sobre nosotros</router-link>
          <router-link class="inline-block p-4" to="#">Contacto</router-link>
          <router-link class="inline-block p-4" to="#" :class="{ hidden: menu }">
            Iniciar sesión
          </router-link>
        </nav>
      </div>

      <!-- Log in -->
      <div class="hidden">
        <a href="#">Iniciar sesión</a>
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
    return { menu }
  }
}
</script>
