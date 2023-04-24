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
        { name: 'Inicio', to: '/' },
        { name: 'Tiempos compartidos', to: '/sharedTimes' },
        { name: 'Destinos', to: '/destinations' },
        { name: 'Sobre nosotros', to: '/aboutUs' },
        { name: 'Contacto', to: '/contact' }
      ],
      footerContent: {
        links: [
          { name: 'Inicio', to: '/' },
          { name: 'Tiempos compartidos', to: '/sharedTimes' },
          { name: 'Sobre nosotros', to: '/aboutUs' },
          { name: 'Contacto', to: '/contact' }
        ],
        social: [
          { name: 'facebook', to: '#' },
          { name: 'instagram', to: '#' },
          { name: 'linkedin', to: '#' },
          { name: 'youtube', to: '#' }
        ],
        columns: [
          ['Políticas de privacidad', 'Franquicias', 'Grupos'],
          ['Financiamiento', 'Contacto', 'Relaciones externas'],
          ['Visas', 'Atención al cliente', 'Bolsa de trabajo']
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
