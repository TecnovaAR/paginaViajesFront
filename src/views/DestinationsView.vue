<template>
  <ThirdHero :content="thirdHeroContent" />

  <CardsHorizontal :content="horizontalCards" :over="true" />

  <Rectangle :content="rectangle" />

  <CardsHorizontal :content="horizontalCards2" :over="false" />
</template>

<script>
import sharedTimesData from '@/components/utils/sharedTimesData.js'

import ThirdHero from '@/components/General/ThirdHero.vue'
import CardsHorizontal from '@/components/General/CardsHorizontal.vue'
import Rectangle from '@/components/General/Rectangle.vue'

export default {
  name: 'DestinationsView',
  setup() {
    let counter = 0;

    const horizontalCards = [];
    const horizontalCards2 = [];
    const treeCards = [];

    for (let key in sharedTimesData) {
      for (let i in sharedTimesData[key]) {
        if (counter > 6 && counter < 13) {
          horizontalCards.push({
            url: sharedTimesData[key][i].secondHeroUrl,
            title: sharedTimesData[key][i].imageRightContent.title,
            description: sharedTimesData[key][i].imageRightContent.desc,
            to: `/sharedTime/${i}`
          })
        }

        if (counter > 13 && counter < 18) {
          horizontalCards2.push({
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
        backgroundUrl: 'assets/img/DESTINOS/ORLANDO/ORLANDO_2.webp',
        title: 'DESTINOS'
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
      horizontalCards2
    }
  },
  components: {
    ThirdHero,
    CardsHorizontal,
    Rectangle
  }
}
</script>
