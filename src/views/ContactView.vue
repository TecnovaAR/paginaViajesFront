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
      secondHeroUrl: 'assets/img/DESTINOS/PANAMA/PANAMA_1.webp',
      curvedContent: {
        title: 'No dudes en contactarnos',
        description:
          'Lo mejor que puedes regalarte son esas vacaciones en un destino que te haga disfrutar de tu tiempo y conocer nuevas partes del mundo. ¡No lo pienses más y contáctanos!'
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
