<template>
  <Navbar :links="navbarLinks" />
  <router-view />
  <Footer :content="footerContent" />
</template>

<script>
import Navbar from '@/components/General/Navbar.vue'
import Footer from '@/components/General/Footer.vue'

export default {
  name: 'MainLayout',
  setup() {
    return {
      navbarLinks: [
        { name: 'Inicio', to: '#' },
        { name: 'Tiempos compartidos', to: '#' },
        { name: 'Destinos', to: '#' },
        { name: 'Sobre nosotros', to: '#' },
        { name: 'Contacto', to: '#' }
      ],
      footerContent: {
        links: [
          { name: 'Inicio', to: '#' },
          { name: 'Tiempos compartidos', to: '#' },
          { name: 'Sobre nosotros', to: '#' },
          { name: 'Contacto', to: '#' }
        ],
        social: [
          { name: 'facebook', to: '#' },
          { name: 'instagram', to: '#' },
          { name: 'linkedin', to: '#' },
          { name: 'youtube', to: '#' }
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
