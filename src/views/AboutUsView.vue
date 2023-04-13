<template>
  <SecondHero :url="secondHeroUrl" />

  <ImageRight :content="imageRightContent" />

  <Team :content="teamContent" />

  <Stars :content="cardStarContent" />

  <ImageLeft :content="imageLeftContent" />
</template>

<script>
import SecondHero from '@/components/General/SecondHero.vue'
import ImageRight from '@/components/About/ImageRight.vue'
import Team from '@/components/General/Team.vue'
import Stars from '@/components/General/Stars.vue'
import ImageLeft from '@/components/About/ImageLeft.vue'

export default {
  name: 'AboutUsView',
  setup() {
    return {
      secondHeroUrl: 'src/assets/img/DESTINOS/MIAMI/MIAMI_2.jpg',
      teamContent: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex, et tincidunt ipsum nibh nec risus.'
      },
      imageRightContent: {
        title: 'Lorem Impsum, Dolor sit Amet',
        social: [
          { name: 'facebook', to: '#' },
          { name: 'instagram', to: '#' },
          { name: 'linkedin', to: '#' },
          { name: 'youtube', to: '#' }
        ],
        image: 'src/assets/img/DESTINOS/CANCUN/CANCUN_3.jpg'
      },
      cardStarContent: [
        {
          title: 'Lorem impsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Lorem impsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        },
        {
          title: 'Lorem impsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        },
        {
          title: 'Lorem impsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        }
      ],
      imageLeftContent: {
        image: 'src/assets/img/DESTINOS/CARTAGENA/CARTAGENA_3.webp',
        paragraphs: [
          {
            title: 'Lorem Ipsum',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex, et tincidunt ipsum nibh nec risus.'
          },
          {
            title: 'Lorem Ipsum',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex, et tincidunt ipsum nibh nec risus.'
          }
        ]
      }
    }
  },
  components: {
    SecondHero,
    ImageRight,
    Team,
    Stars,
    ImageLeft
  }
}
</script>
