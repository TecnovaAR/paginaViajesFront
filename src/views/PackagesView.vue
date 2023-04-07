<template>
  <HeroThirdLayout title="Paquetes de viajes" />

  <div class="relative bg-[#fff] py-5">
    <div
      class="relative z-2 mx-4 my-12 grid gap-5 lg:mx-auto lg:max-w-screen-md lg:grid-cols-2 xl:max-w-screen-lg xl:gap-10 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
    >
      <CardHorizontal
        class="-mt-32 lg:-mt-40 2xl:-mt-52"
        :cardContent="cardHorizontal1"
        :key="cardHorizontal1.title"
      />
      <CardHorizontal
        class="lg:-mt-40 2xl:-mt-52"
        :cardContent="cardHorizontal2"
        :key="cardHorizontal2.title"
      />
      <CardHorizontal :cardContent="cardHorizontal3" :key="cardHorizontal3.title" />
      <CardHorizontal :cardContent="cardHorizontal4" :key="cardHorizontal4.title" />
      <CardHorizontal :cardContent="cardHorizontal5" :key="cardHorizontal5.title" />
      <CardHorizontal :cardContent="cardHorizontal6" :key="cardHorizontal6.title" />
    </div>
    <div class="absolute right-0 top-0 h-full w-1/4 bg-primary"></div>
    <div class="flex w-full flex-col items-center justify-center">
      <p class="mb-1 text-lg uppercase text-black md:text-xl lg:text-2xl 4xl:text-3xl">Ver más</p>
      <font-awesome-icon
        :icon="['fas', 'circle-chevron-down']"
        class="text-xl text-black md:text-2xl lg:text-3xl 4xl:text-4xl"
      />
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

  <div class="hidden h-20 md:block xl:h-32"></div>
</template>

<script>
import HeroThirdLayout from '../components/HeroThirdLayout.vue'
import CardHorizontal from '../components/CardHorizontal.vue'
import RectangleCard from '../components/RectangleCard.vue'
import TreeCardsCarousel from '../components/TreeCardsCarousel.vue'

export default {
  name: 'PackagesView',
  setup() {
    return {
      cardHorizontal1: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
        price: '$100 MXN'
      },
      cardHorizontal2: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
        price: '$1,000 MXN'
      },
      cardHorizontal3: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
        price: '$1,500 MXN'
      },
      cardHorizontal4: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
        price: '$2,000 MXN'
      },
      cardHorizontal5: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
        price: '$1,500 MXN'
      },
      cardHorizontal6: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex.',
        price: '$2,000 MXN'
      },
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
      ]
    }
  },
  components: { HeroThirdLayout, CardHorizontal, RectangleCard, TreeCardsCarousel }
}
</script>
