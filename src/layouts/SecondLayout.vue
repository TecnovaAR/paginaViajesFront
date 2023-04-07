<template>
  <Navbar />
  <div
    class="h-52 w-full bg-heroPattern1 bg-cover bg-center sm:h-52 lg:h-64 2xl:h-72 4xl:h-110 5xl:h-140"
  ></div>
  <router-view />
  <Footer :footerContent="footerContent" />
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'SecondLayout',
  setup() {
    return {
      footerContent: {
        links: [
          { name: 'Inicio', to: '#' },
          { name: 'Personaliza tu viaje', to: '#' },
          { name: 'Paquetes', to: '#' },
          { name: 'Sobre nosotros', to: '#' },
          { name: 'Contacto', to: '#' }
        ],
        social: [
          { name: 'Facebook', to: '#' },
          { name: 'Instagram', to: '#' },
          { name: 'Twitter', to: '#' }
        ],
        columns: [
          ['Lorem impsum dolor sit', 'Lorem impsum dolor sit', 'Lorem impsum dolor sit'],
          ['Lorem impsum dolor sit', 'Lorem impsum dolor sit', 'Lorem impsum dolor sit'],
          ['Lorem impsum dolor sit', 'Lorem impsum dolor sit', 'Lorem impsum dolor sit']
        ]
      }
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>
