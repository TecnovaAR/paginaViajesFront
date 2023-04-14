<template>
  <ThirdHero :content="thirdHeroContent" />

  <CardsHorizontal :content="horizontalCards" :over="true" />

  <Rectangle :content="rectangle" />

  <CardsHorizontal :content="horizontalCards2" :over="false" />
</template>

<script>
import ThirdHero from '@/components/General/ThirdHero.vue'
import CardsHorizontal from '@/components/General/CardsHorizontal.vue'
import Rectangle from '@/components/General/Rectangle.vue'

const destinationsUrl = '/src/assets/img/DESTINOS/'
const sharedTimesUrl = '/src/assets/img/TIEMPOS_COMPARTIDOS/'

export default {
  name: 'DestinationsView',
  setup() {
    return {
      thirdHeroContent: {
        backgroundUrl: '/src/assets/img/DESTINOS/ORLANDO/ORLANDO_2.webp',
        title: 'DESTINOS'
      },
      horizontalCards: [
        {
          url: `${destinationsUrl}ORLANDO/ORLANDO_1.jpg`,
          title: 'Orlando',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: `${destinationsUrl}MIAMI/MIAMI_2.jpg`,
          title: 'Miami',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: `${destinationsUrl}FLORIDA/FLORIDA_1.jpg`,
          title: 'Florida',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: `${destinationsUrl}CANCUN/CANCUN_3.jpg`,
          title: 'Cancún',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: `${destinationsUrl}CABOS/CABOS_1.webp`,
          title: 'Los Cabos',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: `${destinationsUrl}CARTAGENA/CARTAGENA_3.webp`,
          title: 'Cartagena',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        }
      ],
      rectangle: {
        title: 'Lorem ipsum dolor sit amet',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex, et tincidunt ipsum nibh nec risus.',
        cards: [
          {
            title: 'Lorem ipsum',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
          },
          {
            title: 'Lorem ipsum',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
          },
          {
            title: 'Lorem ipsum',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
          },
          {
            title: 'Lorem ipsum',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
          },
          {
            title: 'Lorem ipsum',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
          }
        ]
      },
      horizontalCards2: [
        {
          url: `${sharedTimesUrl}VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_2.jpg`,
          title: 'VALLARTA VIDANTA GRAN LUXX',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: `${sharedTimesUrl}MAZATLAN_VIDANTA_Y_MAYAN_PALACE/MAZATLAN_VIDANTA_3.jpg`,
          title: 'MAZATLÁN VIDANTA Y MAYAN PALACE',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: `${sharedTimesUrl}LOS_CABOS_VIDANTA/LOS_CABOS_VIDANTA_1.jpg`,
          title: 'LOS CABOS VIDANTA',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: `${sharedTimesUrl}LAS_VEGAS_CEASARS_PALACE/LAS_VEGAS_CEASARS_PALACE_1.jpg`,
          title: 'LAS VEGAS CAESARS PALACE',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        }
      ]
    }
  },
  components: {
    ThirdHero,
    CardsHorizontal,
    Rectangle
  }
}
</script>
