<template>
  <MainCarousel :slides="slides" />

  <FourCards />

  <Rectangle :content="rectangle" />

  <TreeCardsCarousel :content="treeCards" />

  <Team :content="teamContent" />

  <Curved :content="curvedContent" />

  <CardsHorizontal :content="horizontalCards" :over="false" />

  <Contact />
</template>
<script>
import sharedTimesData from '@/components/utils/sharedTimesData.js'

import MainCarousel from '@/components/Carousels/MainCarousel.vue'
import FourCards from '@/components/Home/FourCards.vue'
import Rectangle from '@/components/General/Rectangle.vue'
import TreeCardsCarousel from '@/components/Carousels/TreeCardsCarousel.vue'
import Team from '@/components/General/Team.vue'
import Curved from '@/components/General/Curved.vue'
import CardsHorizontal from '@/components/General/CardsHorizontal.vue'
import Contact from '@/components/Home/Contact.vue'

export default {
  name: 'HomeView',
  setup() {
    let counter = 0;
    const slides = [];
    const treeCards = [];
    const horizontalCards = [];

    for (let key in sharedTimesData) {
      for (let i in sharedTimesData[key]) {
        slides.push({
          url: sharedTimesData[key][i].secondHeroUrl,
          text: sharedTimesData[key][i].imageRightContent.title,
          to: `/sharedTime/${i}`
        })

        treeCards.push({
          url: sharedTimesData[key][i].secondHeroUrl,
          title: sharedTimesData[key][i].imageRightContent.title,
          description: sharedTimesData[key][i].imageRightContent.desc,
          to: `/sharedTime/${i}`
        })

        if (counter < 4) {
          horizontalCards.push({
            url: sharedTimesData[key][i].secondHeroUrl,
            title: sharedTimesData[key][i].imageRightContent.title,
            description: sharedTimesData[key][i].imageRightContent.desc,
            to: `/sharedTime/${i}`
          })
        }

        counter++;
      }
    }

    return {
      slides,
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
      treeCards,
      teamContent: {
        title: 'Destinos para todos los gustos',
        description:
          'Si lo que buscas es un destino ‘Adults Only’, tenemos buenas noticias para ti, te demostramos los mejores hoteles con diversas amenidades para viajar hasta tu ideal tiempo compartido. ¡Conócelos!'
      },
      curvedContent: {
        title: '¿Estás pensando en hacer un viaje impresionante?',
        description:
          '¡Con nosotros puedes hacerlo realidad! Ofrecemos todos los recursos que necesitas para planear tus vacaciones en el destino que desees, con una atención de alta calidad.'
      },
      horizontalCards,
      sharedTimesData: sharedTimesData
    }
  },
  components: {
    MainCarousel,
    FourCards,
    Rectangle,
    TreeCardsCarousel,
    Team,
    Curved,
    CardsHorizontal,
    Contact
  }
}
</script>
