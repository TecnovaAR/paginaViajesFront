<template>
  <div>
    <MainCarousel :slides="slides" />

    <!-- Cards Container -->
    <div class="bg-[url(src/assets/img/back-pattern1.png)] bg-cover bg-center px-4 pb-20">
      <div
        class="mx-auto grid gap-6 md:grid-cols-2 lg:max-w-5xl lg:grid-cols-4 xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl 4xl:max-w-10xl 5xl:max-w-11xl"
      >
        <CardMain :cardContent="cardsMain[0]" />
        <CardMain :cardContent="cardsMain[1]" class="mt-6 md:-mt-20" />
        <CardMain :cardContent="cardsMain[2]" class="mt-6 lg:-mt-20" />
        <CardMain :cardContent="cardsMain[3]" class="mt-6 lg:-mt-20" />
      </div>
    </div>

    <div
      class="my-8 py-4 md:p-10 lg:my-0 lg:p-20 2xl:p-32 3xl:p-36 4xl:flex 4xl:items-center 4xl:justify-center"
    >
      <RectangleCard :cardContent="cardRectangle" />
    </div>

    <div
      class="relative flex h-150 w-full items-center justify-center bg-primary py-5 xl:h-160 2xl:h-180 4xl:h-220 5xl:h-260"
    >
      <div class="absolute right-0 top-0 h-full w-1/4 bg-[#fff]"></div>
      <TreeCardsCarousel :cardContent="threeCards" class="absolute" />
    </div>

    <div class="pt-24">
      <Team :content="teamContent" />
    </div>

    <Curved :content="curvedContent" />

    <div class="relative bg-[#fff] py-5">
      <div
        class="relative z-2 mx-4 my-12 grid gap-5 lg:mx-auto lg:max-w-screen-md lg:grid-cols-2 xl:max-w-screen-lg xl:gap-10 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
      >
        <CardHorizontal v-for="text in cardHorizontal" :cardContent="text" :key="text.title" />
      </div>
      <div class="absolute right-0 top-0 h-full w-1/4 bg-primary"></div>
    </div>
  </div>
</template>

<script>
import MainCarousel from '../components/MainCarousel.vue'
import CardMain from '../components/CardMain.vue'
import RectangleCard from '../components/RectangleCard.vue'
import TreeCardsCarousel from '../components/TreeCardsCarousel.vue'
import Team from '../components/Team.vue'
import Curved from '../components/Curved.vue'
import CardHorizontal from '../components/CardHorizontal.vue'
import Contact1 from '../components/Contact1.vue'

export default {
  name: 'HomeView',
  setup() {
    return {
      slides: [
        { bgClass: 'bg-heroPattern1', text: 'Cancun Vidanta Gran Mayan' },
        { bgClass: 'bg-heroPattern2', text: 'Caracas Melia Marriot' },
        { bgClass: 'bg-heroPattern3', text: 'Hyatt Regency' },
        { bgClass: 'bg-heroPattern4', text: 'Florida Windman - Hyatt' },
        { bgClass: 'bg-heroPattern5', text: 'Las Vegas Ceasars Palace' },
        { bgClass: 'bg-heroPattern6', text: 'Los Cabos Vidanta' },
        { bgClass: 'bg-heroPattern7', text: 'Mazatlan Vidanta Y Mayan Palace' },
        { bgClass: 'bg-heroPattern8', text: 'Vallarta Vidanta Gran Luxx' }
      ],
      cardsMain: [
        {
          title: 'Lorem Ipsum',
          subtitle: 'Lorem Impsu Dolor Sit Amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis id est aliquam porttitor.'
        },
        {
          title: 'Lorem Ipsum',
          subtitle: 'Lorem Impsu Dolor Sit Amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis id est aliquam porttitor.'
        },
        {
          title: 'Lorem Ipsum',
          subtitle: 'Lorem Impsu Dolor Sit Amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis id est aliquam porttitor.'
        },
        {
          title: 'Lorem Ipsum',
          subtitle: 'Lorem Impsu Dolor Sit Amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis id est aliquam porttitor.'
        }
      ],
      cardRectangle: [
        {
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        }
      ],
      threeCards: [
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
          url: 'DESTINOS/PUERTO VALLARTA/PUERTO_VALLARTA_2.jpg',
          title: 'Puerto Vallarta',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'DESTINOS/PUERTO PENASCO/PUERTO_PENASCO_2.jpg',
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
      cardHorizontal: [
        {
          url: 'VALLARTA VIDANTA GRAN LUXX/VALLARTA_ VIDANTA_GRAN_LUXX_2.jpg',
          title: 'VALLARTA VIDANTA GRAN LUXX',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'MAZATLAN VIDANTA  Y MAYAN PALACE/MAZATLAN_VIDANTA_3.jpg',
          title: 'MAZATLÁN VIDANTA Y MAYAN PALACE',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'LOS CABOS VIDANTA/LOS_CABOS_VIDANTA_1.jpg',
          title: 'LOS CABOS VIDANTA',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        },
        {
          url: 'LAS VEGAS CEASARS PALACE/LAS_VEGAS_CEASARS_PALACE_1.jpg',
          title: 'LAS VEGAS CAESARS PALACE',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
        }
      ],
      contactInfo: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        phone: '+55 123 454 5678',
        email: 'email@gmail.com',
        address:
          'Av Fray Luis de León 8051, Centro Sur 76090 Querétaro Centro, Querétaro Arteaga, México.'
      }
    }
  },
  components: {
    MainCarousel,
    CardMain,
    RectangleCard,
    TreeCardsCarousel,
    Team,
    Curved,
    CardHorizontal,
    Contact1
  }
}
</script>
