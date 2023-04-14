<template>
  <SecondHero :url="secondHeroUrl" />

  <Contact />

  <Curved :content="curvedContent" />
</template>

<script>
import SecondHero from '@/components/General/SecondHero.vue'
import Contact from '@/components/Contact/Contact.vue'
import Curved from '@/components/General/Curved.vue'

export default {
  name: 'ContactView',
  setup() {
    return {
      secondHeroUrl: '/src/assets/img/DESTINOS/PANAMA/PANAMA_1.webp',
      curvedContent: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex, et tincidunt ipsum nibh nec.'
      }
    }
  },
  components: {
    SecondHero,
    Contact,
    Curved
  }
}
</script>
