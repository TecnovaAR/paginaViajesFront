<template>
  <Navbar :links="navbarLinks" />
  <router-view />
</template>

<script>
import Navbar from '@/components/General/Navbar.vue'

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
      ]
    }
  },
  components: {
    Navbar
  }
}
</script>
