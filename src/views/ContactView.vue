<template>
  <div
    class="h-52 w-full bg-heroPattern1 bg-cover bg-center sm:h-52 lg:h-64 2xl:h-72 4xl:h-110 5xl:h-140"
  ></div>

  <div
    class="items-center justify-center px-4 md:py-10 lg:flex lg:flex-col lg:py-18 xl:py-28 3xl:py-36"
  >
    <div
      class="my-8 flex flex-col items-center justify-center md:mx-10 md:flex-row md:justify-between lg:w-full lg:max-w-screen-lg 4xl:max-w-screen-3xl"
    >
      <h2 class="mb-6 text-xl font-medium uppercase md:mb-0 4xl:text-3xl">Agencia de viajes</h2>

      <a
        class="w-3/4 rounded border border-black bg-transparent px-8 py-1 text-center text-sm font-semibold uppercase text-black duration-300 ease-in-out hover:cursor-pointer hover:bg-black hover:text-white hover:transition-all md:w-auto xl:border-2 4xl:text-xl"
      >
        Cotizar un viaje
      </a>
    </div>

    <Contact2 :contactInfo="contactInfo" />
  </div>
  <Curved :content="curvedContent" />
</template>

<script>
import Contact2 from '@/components/Contact2.vue'
import Curved from '@/components/Curved.vue'

export default {
  name: 'ContactView',
  setup() {
    return {
      contactInfo: {
        phone: '+55 123 454 5678',
        email: 'email@gmail.com',
        address:
          'Av Fray Luis de León 8051, Centro Sur 76090 Querétaro Centro, Querétaro Arteaga, México.'
      },
      curvedContent: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
      }
    }
  },
  components: {
    Contact2,
    Curved
  }
}
</script>
