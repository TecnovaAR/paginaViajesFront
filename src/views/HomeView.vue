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
import MainCarousel from '@/components/Carousels/MainCarousel.vue'
import FourCards from '@/components/Home/FourCards.vue'
import Rectangle from '@/components/General/Rectangle.vue'
import TreeCardsCarousel from '@/components/Carousels/TreeCardsCarousel.vue'
import Team from '@/components/General/Team.vue'
import Curved from '@/components/General/Curved.vue'
import CardsHorizontal from '@/components/General/CardsHorizontal.vue'
import Contact from '@/components/Home/Contact.vue'

const slideUrl = 'assets/img/TIEMPOS_COMPARTIDOS/'

export default {
  name: 'HomeView',
  setup() {
    return {
      slides: [
        {
          url: `${slideUrl}CANCUN_VIDANTA_GRAN_MAYAN/CANCUN_VIDANTA_GRAN_MAYAN_3.jpg`,
          text: 'Cancun Vidanta Gran Mayan',
          to: '/sharedTime/cancun'
        },
        {
          url: `${slideUrl}CARACAS_MELIA_MARRIOT/CARACAS_MELIA_MARRIOT_1.jpg`,
          text: 'Caracas Melia Marriot',
          to: '/sharedTime/caracas'
        },
        {
          url: `${slideUrl}HYATT_REGENCY/HYATT_REGENCY_1.jpg`,
          text: 'Hyatt Regency',
          to: '/sharedTime/hyatt'
        },
        {
          url: `${slideUrl}FLORIDA_WINDMAN_HYATT/FLORIDA_WINDMAN_HYATT_5.jpg`,
          text: 'Florida Windman - Hyatt',
          to: '/sharedTime/florida'
        },
        {
          url: `${slideUrl}LAS_VEGAS_CEASARS_PALACE/LAS_VEGAS_CEASARS_PALACE_1.jpg`,
          text: 'Las Vegas Ceasars Palace',
          to: '/sharedTime/lasVegas'
        },
        {
          url: `${slideUrl}LOS_CABOS_VIDANTA/LOS_CABOS_VIDANTA_1.jpg`,
          text: 'Los Cabos Vidanta',
          to: '/sharedTime/losCabos'
        },
        {
          url: `${slideUrl}MAZATLAN_VIDANTA_Y_MAYAN_PALACE/MAZATLAN_VIDANTA_2.jpg`,
          text: 'Mazatlan Vidanta Y Mayan Palace',
          to: '/sharedTime/mazatlan'
        },
        {
          url: `${slideUrl}VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_2.jpg`,
          text: 'Vallarta Vidanta Gran Luxx',
          to: '/sharedTime/vallarta'
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
      },
      curvedContent: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex, et tincidunt ipsum nibh nec.'
      },
      horizontalCards: [
        {
          url: `${slideUrl}VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_2.jpg`,
          title: 'VALLARTA VIDANTA GRAN LUXX',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          to: '/sharedTime/vallarta'
        },
        {
          url: `${slideUrl}MAZATLAN_VIDANTA_Y_MAYAN_PALACE/MAZATLAN_VIDANTA_3.jpg`,
          title: 'MAZATLÁN VIDANTA Y MAYAN PALACE',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          to: '/sharedTime/mazatlan'
        },
        {
          url: `${slideUrl}LOS_CABOS_VIDANTA/LOS_CABOS_VIDANTA_1.jpg`,
          title: 'LOS CABOS VIDANTA',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          to: '/sharedTime/losCabos'
        },
        {
          url: `${slideUrl}LAS_VEGAS_CEASARS_PALACE/LAS_VEGAS_CEASARS_PALACE_1.jpg`,
          title: 'LAS VEGAS CAESARS PALACE',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          to: '/sharedTime/lasVegas'
        }
      ]
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
