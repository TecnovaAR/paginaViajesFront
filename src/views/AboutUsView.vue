<template>
  <div
    class="h-52 w-full bg-heroPattern1 bg-cover bg-center sm:h-52 lg:h-64 2xl:h-72 4xl:h-110 5xl:h-140"
  ></div>

  <Trip />

  <div class="pb-10 lg:pb-14 3xl:pb-20">
    <Team />
  </div>

  <div class="flex lg:justify-center">
    <div
      class="mx-4 grid md:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-4 lg:gap-10 2xl:max-w-screen-xl 4xl:max-w-screen-3xl"
    >
      <CardStar v-for="card in cardStarContent" :key="card.title" :cardContent="card" />
    </div>
  </div>

  <div class="mb-100 mx-4 flex flex-col md:mx-0 md:mb-10 md:flex-row md:gap-5 lg:mb-20">
    <div class="mb-3 md:basis-2/5"><img src="src/assets/img/viaje2.png" alt="Viaje 2" /></div>

    <div class="flex flex-col items-center justify-center md:basis-3/5">
      <div class="lg:w-3/4 3xl:w-4/5">
        <h2
          class="mb-3 text-2xl font-semibold text-primary lg:text-4xl xl:mb-8 2xl:text-5xl 3xl:mb-10 3xl:text-7xl"
        >
          Lorem Impsum
        </h2>

        <p class="mb-4 lg:mb-12 lg:text-xl xl:text-2xl 3xl:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin
          consequat, dui velit placerat ex, et tincidunt ipsum nibh nec risus.
        </p>
      </div>
      <div class="lg:w-3/4 3xl:w-4/5">
        <h2
          class="mb-3 text-2xl font-semibold text-primary lg:text-4xl xl:mb-8 2xl:text-5xl 3xl:mb-10 3xl:text-7xl"
        >
          Lorem Impsum
        </h2>

        <p class="mb-4 lg:mb-12 lg:text-xl xl:text-2xl 3xl:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin
          consequat, dui velit placerat ex, et tincidunt ipsum nibh nec risus.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Trip from '../components/Trip.vue'
import Team from '../components/Team.vue'
import CardStar from '../components/CardStar.vue'

export default {
  name: 'AboutUsView',
  setup() {
    return {
      cardStarContent: [
        {
          title: 'Lorem impsum dolor sit',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Lorem impsum dolor sit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        },
        {
          title: 'Lorem impsum dolor sit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        },
        {
          title: 'Lorem impsum dolor sit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        }
      ]
    }
  },
  components: {
    Team,
    Trip,
    CardStar
  }
}
</script>
