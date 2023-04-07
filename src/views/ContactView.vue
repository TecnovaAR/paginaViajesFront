<template>
  <div class="items-center justify-center px-4 lg:flex lg:flex-col">
    <div
      class="my-8 flex flex-col items-center justify-center md:mx-10 md:flex-row md:justify-between lg:w-full lg:max-w-screen-lg 4xl:max-w-screen-3xl"
    >
      <h2 class="mb-6 text-xl font-medium uppercase md:mb-0 4xl:text-3xl">Agencia de viajes</h2>

      <a
        class="w-3/4 rounded border border-black bg-transparent px-8 py-1 text-center text-sm font-semibold uppercase text-black duration-300 ease-in-out hover:cursor-pointer hover:bg-black hover:text-white hover:transition-all md:w-auto 4xl:text-xl"
      >
        Cotizar un viaje
      </a>
    </div>

    <Contact2 :contactInfo="contactInfo" />
  </div>
</template>

<script>
import Contact2 from '@/components/Contact2.vue'

export default {
  name: 'ContactView',
  setup() {
    return {
      contactInfo: {
        phone: '+55 123 454 5678',
        email: 'email@gmail.com',
        address:
          'Av Fray Luis de León 8051, Centro Sur 76090 Querétaro Centro, Querétaro Arteaga, México.'
      }
    }
  },
  components: {
    Contact2
  }
}
</script>
