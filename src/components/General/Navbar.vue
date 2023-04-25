<template>
  <div
    class="absolute left-0 top-0 z-3 w-full py-5 text-center text-white lg:bg-transparent"
    :class="{ 'bg-black': !menu, 'bg-transparent': menu }"
  >
    <!-- Navbar Content -->
    <div
      class="mx-4 flex items-center justify-between md:mx-8 lg:mx-12 xl:mx-14 3xl:mx-16 4xl:mx-20 5xl:mx-28"
    >
      <!-- Logo -->
      <a href="/" class="w-24 md:w-28 lg:w-32 2xl:w-36 3xl:w-44 5xl:w-52">
        <img src="/assets/img/OTHERS/logoWhite.svg" alt="Logo" />
      </a>

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

      <!-- Navbar Links -->
      <nav
        class="absolute left-0 top-18 flex w-full flex-col bg-black py-4 text-center shadow-md transition-all duration-300 md:top-20 lg:relative lg:top-0 lg:block lg:w-auto lg:flex-row lg:items-center lg:justify-between lg:bg-transparent lg:py-0 lg:shadow-none lg:transition-none 5xl:py-6"
        :class="{ hidden: menu }"
      >
        <router-link
          v-for="link in links"
          :to="link.to"
          class="inline-block p-4 text-sm uppercase hover:text-white-500 md:text-base lg:text-sm xl:text-sm 2xl:text-base 4xl:text-lg 5xl:text-2xl"
          :label="link.name"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

const menu = ref(true)

export default {
  name: 'Navbar',
  props: {
    links: Object
  },
  setup() {
    return {
      menu
    }
  }
}
</script>
