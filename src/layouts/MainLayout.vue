<template>
  <Navbar />
  <router-view />
  <Footer :footerContent="footerContent" />
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'MainLayout',
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
