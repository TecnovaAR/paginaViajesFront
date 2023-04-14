<template>
  <div class="flex justify-center bg-[url(/src/assets/img/OTHERS/PATTERN_1.png)] bg-cover bg-center">
    <div
      class="mx-4 mb-20 grid md:mx-8 md:max-w-screen-sm lg:max-w-screen-md lg:grid-cols-2 lg:gap-10 2xl:max-w-screen-2xl 2xl:grid-cols-4 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
    >
      <MainCard :content="mainCard" />
      <MainCard :content="mainCard" class="mt-6 lg:-mt-20" />
      <MainCard :content="mainCard" class="mt-6 2xl:-mt-20" />
      <MainCard :content="mainCard" class="mt-6 2xl:-mt-20" />
    </div>
  </div>
</template>

<script>
import MainCard from '../Cards/MainCard.vue'

export default {
  name: 'FourCards',
  setup() {
    return {
      mainCard: [
        {
          title: 'Lorem Impsum',
          subtitle: 'Lorem Impsu Dolor Sit Amet',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis id est aliquam porttitor.'
        },
        {
          title: 'Lorem Impsum',
          subtitle: 'Lorem Impsu Dolor Sit Amet',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis id est aliquam porttitor.'
        },
        {
          title: 'Lorem Impsum',
          subtitle: 'Lorem Impsu Dolor Sit Amet',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis id est aliquam porttitor.'
        },
        {
          title: 'Lorem Impsum',
          subtitle: 'Lorem Impsu Dolor Sit Amet',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis id est aliquam porttitor.'
        }
      ]
    }
  },
  components: {
    MainCard
  }
}
</script>
