<template>
  <MainCarousel :slides="slides" />

  <FourCards />

  <Rectangle :content="rectangle" />

  <TreeCardsCarousel :content="treeCards" />

  <Team :content="teamContent" />
</template>

<script>
import MainCarousel from '@/components/Carousels/MainCarousel.vue'
import FourCards from '@/components/Home/FourCards.vue'
import Rectangle from '@/components/General/Rectangle.vue'
import TreeCardsCarousel from '@/components/Carousels/TreeCardsCarousel.vue'
import Team from '@/components/General/Team.vue'

const slideUrl = './src/assets/img/TIEMPOS_COMPARTIDOS/'

export default {
  name: 'HomeView',
  setup() {
    return {
      slides: [
        {
          url: `${slideUrl}CANCUN_VIDANTA_GRAN_MAYAN/CANCUN_VIDANTA_GRAN_MAYAN_3.jpg`,
          text: 'Cancun Vidanta Gran Mayan'
        },
        {
          url: `${slideUrl}CARACAS_MELIA_MARRIOT/CARACAS_MELIA_MARRIOT_1.jpg`,
          text: 'Caracas Melia Marriot'
        },
        { url: `${slideUrl}HYATT_REGENCY/HYATT_REGENCY_1.jpg`, text: 'Hyatt Regency' },
        {
          url: `${slideUrl}FLORIDA_WINDMAN_HYATT/FLORIDA_WINDMAN_HYATT_5.jpg`,
          text: 'Florida Windman - Hyatt'
        },
        {
          url: `${slideUrl}LAS_VEGAS_CEASARS_PALACE/LAS_VEGAS_CEASARS_PALACE_1.jpg`,
          text: 'Las Vegas Ceasars Palace'
        },
        { url: `${slideUrl}LOS_CABOS_VIDANTA/LOS_CABOS_VIDANTA_1.jpg`, text: 'Los Cabos Vidanta' },
        {
          url: `${slideUrl}MAZATLAN_VIDANTA_Y_MAYAN_PALACE/MAZATLAN_VIDANTA_2.jpg`,
          text: 'Mazatlan Vidanta Y Mayan Palace'
        },
        {
          url: `${slideUrl}VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_2.jpg`,
          text: 'Vallarta Vidanta Gran Luxx'
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
      ],
      teamContent: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex, et tincidunt ipsum nibh nec risus.'
      }
    }
  },
  components: {
    MainCarousel,
    FourCards,
    Rectangle,
    TreeCardsCarousel,
    Team
  }
}
</script>
