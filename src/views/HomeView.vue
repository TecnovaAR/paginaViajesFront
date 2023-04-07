<template>
  <div>
    <MainCarousel :slides="slides" />

    <!-- Cards Container -->
    <div class="bg-[url(src/assets/img/back-pattern1.png)] bg-cover bg-center px-4 pb-20">
      <div
        class="mx-auto grid gap-6 md:grid-cols-2 lg:max-w-2xl lg:grid-cols-4 xl:max-w-6xl 3xl:max-w-8xl 4xl:max-w-10xl 5xl:max-w-11xl"
      >
        <CardMain />
        <CardMain class="mt-6 md:-mt-20" />
        <CardMain class="mt-6 lg:-mt-20" />
        <CardMain class="mt-6 lg:-mt-20" />
      </div>
    </div>

    <div
      class="my-8 py-4 md:p-10 lg:mb-0 lg:p-20 2xl:p-32 3xl:p-36 4xl:flex 4xl:items-center 4xl:justify-center"
    >
      <RectangleCard :cardContent="cardContent" />
    </div>

    <div
      class="relative flex h-150 w-full items-center justify-center xl:h-160 2xl:h-180 4xl:h-220 5xl:h-260"
    >
      <div class="h-full basis-1/4 md:bg-primary"></div>
      <div class="basis-3/4"></div>
      <TreeCardsCarousel :cardContent="threeCards" class="absolute" />
    </div>

    <div class="pt-24">
      <Team />
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

    <Contact1 :textContent="contactInfo" />
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
        { bgClass: 'bg-heroPattern1' },
        { bgClass: 'bg-heroPattern2' },
        { bgClass: 'bg-heroPattern3' },
        { bgClass: 'bg-heroPattern4' }
      ],
      cardContent: [
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
      curvedContent: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.'
      },
      cardHorizontal: [
        {
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          price: '$100 MXN'
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          price: '$1,000 MXN'
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          price: '$1,500 MXN'
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
          price: '$2,000 MXN'
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
