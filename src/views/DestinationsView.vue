<template>
  <ThirdHero :content="thirdHeroContent" />

  <CardsHorizontal :content="horizontalCards" :over="true" />

  <Rectangle :content="rectangle" />

  <CardsHorizontal :content="horizontalCards2" :over="false" />
</template>

<script>
import sharedTimesData from '@/components/utils/sharedTimesData.js'

import ThirdHero from '@/components/General/ThirdHero.vue'
import CardsHorizontal from '@/components/General/CardsHorizontal.vue'
import Rectangle from '@/components/General/Rectangle.vue'

export default {
  name: 'DestinationsView',
  setup() {
    let counter = 0;

    const horizontalCards = [];
    const horizontalCards2 = [];
    const treeCards = [];

    for (let key in sharedTimesData) {
      for (let i in sharedTimesData[key]) {
        if (counter > 2 && counter < 9) {
          horizontalCards.push({
            url: sharedTimesData[key][i].secondHeroUrl,
            title: sharedTimesData[key][i].imageRightContent.title,
            description: sharedTimesData[key][i].imageRightContent.desc,
            to: `/sharedTime/${i}`
          })
        }

        if (counter > 7 && counter < 15) {
          horizontalCards2.push({
            url: sharedTimesData[key][i].secondHeroUrl,
            title: sharedTimesData[key][i].imageRightContent.title,
            description: sharedTimesData[key][i].imageRightContent.desc,
            to: `/sharedTime/${i}`
          })
        }

        treeCards.push({
          url: sharedTimesData[key][i].secondHeroUrl,
          title: sharedTimesData[key][i].imageRightContent.title,
          description: sharedTimesData[key][i].imageRightContent.desc,
          to: `/sharedTime/${i}`
        })

        counter++;
      }
    }

    return {
      thirdHeroContent: {
        backgroundUrl: 'assets/img/DESTINOS/ORLANDO/ORLANDO_2.webp',
        title: 'DESTINOS'
      },
      horizontalCards,
      rectangle: {
        title: '¡Encuentra tu próximo destino!',
        desc: 'Planea tu próximo viaje y adquiere las mejores ofertas. Con nosotros encontrarás lo más destacado en vuelos, tours, experiencias, hospedajes y mucho más sólo busca la opción que más quieras y prepara las maletas.',
        cards: [
          {
            title: 'Compra fácil',
            desc: 'Reservar tus vacaciones nunca fue tan fácil, sólo elige el destino que más te guste y nosotros nos encargamos del resto.'
          },
          {
            title: 'Formas de pago',
            desc: 'Ofrecemos diferentes formas de pago para que puedas adquirir tus vacaciones de la manera que más te convenga.'
          },
          {
            title: 'Nunca te abandonamos',
            desc: 'Te acompañamos en todo el proceso de compra, desde la elección de tu destino hasta el final de tus vacaciones.'
          },
          {
            title: 'Somos transparentes',
            desc: 'Nuestros precios son claros y sin sorpresas, no te cobraremos nada extra por tu compra.'
          }
        ]
      },
      horizontalCards2
    }
  },
  components: {
    ThirdHero,
    CardsHorizontal,
    Rectangle
  }
}
</script>
