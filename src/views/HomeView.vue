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
import sharedTimesData from '@/components/utils/sharedTimesData.js'

import MainCarousel from '@/components/Carousels/MainCarousel.vue'
import FourCards from '@/components/Home/FourCards.vue'
import Rectangle from '@/components/General/Rectangle.vue'
import TreeCardsCarousel from '@/components/Carousels/TreeCardsCarousel.vue'
import Team from '@/components/General/Team.vue'
import Curved from '@/components/General/Curved.vue'
import CardsHorizontal from '@/components/General/CardsHorizontal.vue'
import Contact from '@/components/Home/Contact.vue'

export default {
  name: 'HomeView',
  setup() {
    let counter = 0;
    const slides = [];
    const treeCards = [];
    const horizontalCards = [];

    for (let key in sharedTimesData) {
      for (let i in sharedTimesData[key]) {
        slides.push({
          url: sharedTimesData[key][i].secondHeroUrl,
          text: sharedTimesData[key][i].imageRightContent.title,
          to: `/sharedTime/${i}`
        })

        treeCards.push({
          url: sharedTimesData[key][i].secondHeroUrl,
          title: sharedTimesData[key][i].imageRightContent.title,
          description: sharedTimesData[key][i].imageRightContent.desc,
          to: `/sharedTime/${i}`
        })

        if (counter > 10 && counter < 15) {
          horizontalCards.push({
            url: sharedTimesData[key][i].secondHeroUrl,
            title: sharedTimesData[key][i].imageRightContent.title,
            description: sharedTimesData[key][i].imageRightContent.desc,
            to: `/sharedTime/${i}`
          })
        }

        counter++;
      }
    }

    return {
      slides,
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
      horizontalCards,
      sharedTimesData: sharedTimesData
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
