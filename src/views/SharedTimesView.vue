<template>
  <ThirdHero :content="thirdHeroContent" />

  <CardsHorizontal :content="horizontalCards" :over="true" />

  <Rectangle :content="rectangle" />

  <TreeCardsCarousel :content="treeCards" />
</template>

<script>
import ThirdHero from '@/components/General/ThirdHero.vue'
import CardsHorizontal from '@/components/General/CardsHorizontal.vue'
import Rectangle from '@/components/General/Rectangle.vue'
import TreeCardsCarousel from '@/components/Carousels/TreeCardsCarousel.vue'

const sharedTimesUrl = '/src/assets/img/TIEMPOS_COMPARTIDOS/'

export default {
  name: 'SharedTimesView',
  setup() {
    return {
      thirdHeroContent: {
        backgroundUrl:
          '/src/assets/img/TIEMPOS_COMPARTIDOS/VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_2.jpg',
        title: 'TIEMPOS COMPARTIDOS'
      },
      horizontalCards: [
        {
          url: `${sharedTimesUrl}VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_2.jpg`,
          title: 'VALLARTA VIDANTA GRAN LUXX',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          to: '/sharedTime/vallarta'
        },
        {
          url: `${sharedTimesUrl}MAZATLAN_VIDANTA_Y_MAYAN_PALACE/MAZATLAN_VIDANTA_3.jpg`,
          title: 'MAZATLÁN VIDANTA Y MAYAN PALACE',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          to: '/sharedTime/mazatlan'
        },
        {
          url: `${sharedTimesUrl}LOS_CABOS_VIDANTA/LOS_CABOS_VIDANTA_1.jpg`,
          title: 'LOS CABOS VIDANTA',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          to: '/sharedTime/losCabos'
        },
        {
          url: `${sharedTimesUrl}LAS_VEGAS_CEASARS_PALACE/LAS_VEGAS_CEASARS_PALACE_1.jpg`,
          title: 'LAS VEGAS CAESARS PALACE',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          to: '/sharedTime/lasVegas'
        },
        {
          url: `${sharedTimesUrl}FLORIDA_WINDMAN_HYATT/FLORIDA_WINDMAN_HYATT_3.jpg`,
          title: 'FLORIDA WINDMAN- HYATT',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          to: '/sharedTime/florida'
        },
        {
          url: `${sharedTimesUrl}HYATT_REGENCY/HYATT_REGENCY_3.jpg`,
          title: 'HYATT REGENCY',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          to: '/sharedTime/hyatt'
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
      treeCards: [
        {
          url: 'DESTINOS/ORLANDO/ORLANDO_1.jpg',
          title: 'Orlando',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/MIAMI/MIAMI_2.jpg',
          title: 'Miami',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/FLORIDA/FLORIDA_1.jpg',
          title: 'Florida',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/CABOS/CABOS_3.jpg',
          title: 'Cabos',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/PANAMA/PANAMA_1.webp',
          title: 'Panama',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/MAZATLAN/MAZATLAN_2.jpg',
          title: 'Mazatlan',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/CANCUN/CANCUN_3.jpg',
          title: 'Cancun',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/PUERTO_VALLARTA/PUERTO_VALLARTA_2.jpg',
          title: 'Puerto Vallarta',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/PUERTO_PENASCO/PUERTO_PENASCO_2.jpg',
          title: 'Puerto Penasco',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/IXTAPA/IXTAPA_1.jpg',
          title: 'Ixtapa',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/CARACAS/CARACAS_1.jpg',
          title: 'Caracas',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/CARTAGENA/CARTAGENA_2.jpg',
          title: 'Cartagena',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        }
      ]
    }
  },
  components: {
    ThirdHero,
    CardsHorizontal,
    Rectangle,
    TreeCardsCarousel
  }
}
</script>
