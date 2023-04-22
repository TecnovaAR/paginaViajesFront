<template>
  <ThirdHero :content="thirdHeroContent" />

  <CardsHorizontal :content="horizontalCards" :over="true" />

  <Rectangle :content="rectangle" />

  <TreeCardsCarousel :content="treeCards" />
</template>

<script>
import sharedTimesData from '@/components/utils/sharedTimesData.js'

import ThirdHero from '@/components/General/ThirdHero.vue'
import CardsHorizontal from '@/components/General/CardsHorizontal.vue'
import Rectangle from '@/components/General/Rectangle.vue'
import TreeCardsCarousel from '@/components/Carousels/TreeCardsCarousel.vue'

export default {
  name: 'SharedTimesView',
  setup() {
    let counter = 0;

    const horizontalCards = [];
    const treeCards = [];

    for (let key in sharedTimesData) {
      for (let i in sharedTimesData[key]) {
        if (counter < 6) {
          horizontalCards.push({
            url: sharedTimesData[key][i].secondHeroUrl,
            title: sharedTimesData[key][i].imageRightContent.title,
            description: sharedTimesData[key][i].imageRightContent.desc,
            to: `/sharedTime/${i}`
          })
        }

        treeCards.push({
          url: sharedTimesData[key][i].secondHeroUrl,
          title: sharedTimesData[key][i].imageRightContent.title,
          description: sharedTimesData[key][i].imageRightContent.desc,
          to: `/sharedTime/${i}`
        })

        counter++;
      }
    }

    return {
      thirdHeroContent: {
        backgroundUrl:
          'assets/img/TIEMPOS_COMPARTIDOS/VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_2.jpg',
        title: 'TIEMPOS COMPARTIDOS'
      },
      horizontalCards,
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
      treeCards,
      counter: counter
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
