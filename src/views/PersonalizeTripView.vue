<template>
  <HeroThirdLayout title="Personaliza tu viaje" />

  <div
    class="-mt-16 flex justify-center md:-mt-20 md:mb-20 lg:-mt-28 lg:mb-28 2xl:-mt-36 3xl:mb-36"
  >
    <Form />
  </div>

  <div
    class="relative flex h-150 w-full items-center justify-center xl:h-160 2xl:h-180 4xl:h-220 5xl:h-260"
  >
    <div class="h-full basis-1/4 md:bg-primary"></div>
    <div class="basis-3/4"></div>
    <TreeCardsCarousel :cardContent="threeCards" class="absolute" />
  </div>

  <div
    class="my-8 py-4 md:p-10 lg:mb-0 lg:p-20 2xl:p-32 3xl:p-36 4xl:flex 4xl:items-center 4xl:justify-center"
  >
    <RectangleCard :cardContent="rectangleCard" />
  </div>
</template>

<script>
import HeroThirdLayout from '../components/HeroThirdLayout.vue'
import Form from '../components/Form.vue'
import TreeCardsCarousel from '../components/TreeCardsCarousel.vue'
import RectangleCard from '../components/RectangleCard.vue'

export default {
  name: 'PersonalizeTripView',
  setup() {
    return {
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
      rectangleCard: [
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
  components: {
    HeroThirdLayout,
    Form,
    TreeCardsCarousel,
    RectangleCard
  }
}
</script>
