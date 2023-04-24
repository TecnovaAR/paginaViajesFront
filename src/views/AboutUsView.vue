<template>
  <SecondHero :url="secondHeroUrl" />

  <ImageRight :content="imageRightContent" />

  <Team :content="teamContent" />

  <Stars :content="cardStarContent" />

  <ImageLeft :content="imageLeftContent" />
</template>

<script>
import SecondHero from '@/components/General/SecondHero.vue'
import ImageRight from '@/components/About/ImageRight.vue'
import Team from '@/components/General/Team.vue'
import Stars from '@/components/General/Stars.vue'
import ImageLeft from '@/components/About/ImageLeft.vue'

export default {
  name: 'AboutUsView',
  setup() {
    return {
      secondHeroUrl: 'assets/img/DESTINOS/MIAMI/MIAMI_2.jpg',
      teamContent: {
        title: 'Destinos para todos los gustos',
        description:
          'Si lo que buscas es un destino ‘Adults Only’, tenemos buenas noticias para ti, te demostramos los mejores hoteles con diversas amenidades para viajar hasta tu ideal tiempo compartido. ¡Conócelos!'
      },
      imageRightContent: {
        title: '¡Encuentra tu próximo destino!',
        social: [
          { name: 'facebook', to: '#' },
          { name: 'instagram', to: '#' },
          { name: 'linkedin', to: '#' },
          { name: 'youtube', to: '#' }
        ],
        image: 'assets/img/DESTINOS/CANCUN/CANCUN_3.jpg'
      },
      cardStarContent: [
        {
          title: 'Compra fácil',
          description: 'Reservar tus vacaciones nunca fue tan fácil, sólo elige el destino que más te guste y nosotros nos encargamos del resto.'
        },
        {
          title: 'Formas de pago',
          description: 'Ofrecemos diferentes formas de pago para que puedas adquirir tus vacaciones de la manera que más te convenga.'
        },
        {
          title: 'No abandonamos',
          description: 'Te acompañamos en todo el proceso de compra, desde la elección de tu destino hasta el final de tus vacaciones.'
        },
        {
          title: 'Transparentes',
          description: 'Nuestros precios son claros y sin sorpresas, no te cobraremos nada extra por tu compra.'
        }
      ],
      imageLeftContent: {
        image: 'assets/img/DESTINOS/CARTAGENA/CARTAGENA_3.webp',
        paragraphs: [
          {
            title: '¿Por qué elegirnos?',
            desc: 'Somos una empresa con más de 10 años de experiencia en el sector turístico, ofreciendo a nuestros clientes las mejores opciones de viaje, con los mejores precios y la mejor atención. Nuestro objetivo es que nuestros clientes disfruten de sus vacaciones sin preocupaciones, por eso nos encargamos de todo, desde la elección del destino hasta el final de sus vacaciones.'
          },
          {
            title: '¿Qué ofrecemos?',
            desc: 'Ofrecemos una gran variedad de destinos, desde los más populares hasta los más exclusivos, con los mejores precios y las mejores ofertas. Nuestros destinos incluyen vuelos, tours, experiencias, hospedajes y mucho más. Además, ofrecemos diferentes formas de pago para que nuestros clientes puedan adquirir sus vacaciones de la manera que más les convenga.'
          }
        ]
      }
    }
  },
  components: {
    SecondHero,
    ImageRight,
    Team,
    Stars,
    ImageLeft
  }
}
</script>
