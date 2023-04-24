<template>
  <div class="flex justify-center bg-[url(/src/assets/img/OTHERS/PATTERN_1.png)] bg-cover bg-center">
    <div
      class="mx-4 mb-20 grid md:mx-8 md:max-w-screen-sm lg:max-w-screen-md lg:grid-cols-2 lg:gap-10 2xl:max-w-screen-2xl 2xl:grid-cols-4 4xl:max-w-screen-3xl 5xl:max-w-screen-4xl"
    >
      <MainCard :content="mainCard[0]" />
      <MainCard :content="mainCard[1]" class="mt-6 lg:-mt-20" />
      <MainCard :content="mainCard[2]" class="mt-6 2xl:-mt-20" />
      <MainCard :content="mainCard[3]" class="mt-6 2xl:-mt-20" />
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
          title: 'Vuelos',
          subtitle: '¡Encuentra las mejores ofertas de vuelos!',
          desc: 'Aquí podrás realizar tu reserva de vuelos, comprar tus boletos de avión, encontrar los mejores paquetes de viajes  a destinos que se ajusten a tu presupuesto, expectativas y experiencias.'
        },
        {
          title: 'Tours',
          subtitle: 'Encuentra el tour perfecto para ti',
          desc: 'Descubre los mejores tours y actividades por todo el mundo, conoce los lugares más emblemáticos de cada destino, vive experiencias únicas y crea recuerdos inolvidables.'
        },
        {
          title: 'Hospedaje',
          subtitle: 'Encuentra el hospedaje perfecto para ti',
          desc: 'Ya sea que busques un hotel, un hostal, un departamento o una casa, aquí podrás encontrar el lugar ideal para tu viaje.'
        },
        {
          title: 'Seguros de viaje',
          subtitle: '¡Viaja seguro y sin preocupaciones!',
          desc: 'Viaja tranquilo y sin preocupaciones, conoce los mejores seguros de viaje y elige el que mejor se adapte a tus necesidades.'
        }
      ]
    }
  },
  components: {
    MainCard
  }
}
</script>
