<template>
  <SecondHero :url="this.data.secondHeroUrl" />

  <ImageRight :content="this.data.imageRightContent" />

  <Stars :content="this.data.cardStarContent" />

  <ImageLeft :content="this.data.imageLeftContent" />

  <TreeImagesCardsCarousel :content="this.data.treeCards" />

  <Form />

  <Curved :content="this.data.curvedContent" />
</template>

<script>
import SecondHero from '@/components/General/SecondHero.vue'
import ImageRight from '@/components/SharedTime/ImageRight.vue'
import Stars from '@/components/General/Stars.vue'
import ImageLeft from '@/components/SharedTime/ImageLeft.vue'
import TreeImagesCardsCarousel from '@/components/Carousels/TreeImagesCardsCarousel.vue'
import Form from '@/components/SharedTime/Form.vue'
import Curved from '@/components/General/Curved.vue'

import sharedTimesData from '@/components/utils/sharedTimesData.js'

export default {
  name: 'SharedTimeView',
  setup() {
    return {
      data: Object,
      secondHeroUrl:
        '/assets/img/TIEMPOS_COMPARTIDOS/VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_2.jpg',
      imageRightContent: {
        title: 'VALLARTA VIDANTA GRAN LUXX',
        desc: 'Con suntuosas torres de alojamientos construidas a lo largo del espectacular río Ameca, Grand Luxxe Nuevo Vallarta es un modelo de vivienda de lujo. El hotel resort más exclusivo de Vidanta galardonado con el Premio 5 Diamond de AAA.',
        image:
          'assets/img/TIEMPOS_COMPARTIDOS/VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_2.jpg'
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
        image:
          'assets/img/TIEMPOS_COMPARTIDOS/VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_1.jpg',
        amenities: [
          'Master Rooms',
          'Suite',
          'Suite doble',
          'Villa',
          'Villa con recámara',
          'Villa doble',
          'Suite Presidencial',
          'Villa Presidencial',
          'Villa Presidencial doble',
          'Villa Presidencial triple',
          'Suite SPA doble',
          'Suite SPA triple',
          'Loft de lujo',
          'Suite Royal',
          'Suite Royal doble',
          'Campos de Golf',
          'SPA',
          'Espectáculos',
          'Lake Shows',
          'Música en vivo',
          'Alta cocina',
          'Bares y lounges',
          'Piscina circular',
          'Piscina infinita',
          'Piscina solo para adultos',
          'Piscina este y oeste',
          'Piscinas de la Torre de Spa',
          'Piscina del Sky Garden',
          'Piscina del Sky Lounge',
          'Piscina de Kid’s Club'
        ]
      },
      treeCards: [
        {
          url: 'TIEMPOS_COMPARTIDOS/VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_1.jpg'
        },
        {
          url: 'TIEMPOS_COMPARTIDOS/VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_2.jpg'
        },
        {
          url: 'TIEMPOS_COMPARTIDOS/VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_3.jpg'
        },
        {
          url: 'TIEMPOS_COMPARTIDOS/VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_1.jpg'
        },
        {
          url: 'TIEMPOS_COMPARTIDOS/VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_2.jpg'
        },
        {
          url: 'TIEMPOS_COMPARTIDOS/VALLARTA_VIDANTA_GRAN_LUXX/VALLARTA_VIDANTA_GRAN_LUXX_3.jpg'
        }
      ],
      curvedContent: {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, sem ac sollicitudin consequat, dui velit placerat ex, et tincidunt ipsum nibh nec.'
      }
    }
  },
  created() {
    // Using the param "name" to get the data from sharedTimesData
    this.data = sharedTimesData.sharedTimesData[this.$route.params.name]
  },
  components: {
    SecondHero,
    ImageRight,
    Stars,
    ImageLeft,
    TreeImagesCardsCarousel,
    Form,
    Curved
  }
}
</script>

<style>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  @apply !m-0;
}

input[type='number'] {
  -moz-appearance: textfield !important;
  appearance: textfield !important;
  @apply !m-0;
}

.fc-day.fc-day-past.fc-daygrid-day:not(.fc-day-other),
.fc-day.fc-day-future.fc-daygrid-day:not(.fc-day-other) {
  @apply !bg-[#fff];
  @apply !text-black;
  @apply !font-semibold;
}

.fc-daygrid-day.fc-day-today {
  @apply !bg-primary;
  @apply !text-[#fff];
  @apply !font-semibold;
}

.fc-highlight {
  @apply !bg-primary/30;
  @apply !text-primary;
  border-radius: 5px !important;
}

.fc-button-primary {
  @apply !bg-transparent;
  @apply !border-black;
  @apply !text-black;
}

.fc-col-header-cell.fc-day {
  @apply !border-none;
}

.fc-daygrid-day-events {
  @apply hidden;
}

.fc-theme-standard .fc-scrollgrid,
.fc-theme-standard td,
.fc-theme-standard th {
  @apply !border-none;
}

.fc .fc-daygrid-day-top {
  @apply !justify-center;
  @apply !items-center;
  @apply !flex;
  @apply !w-full;
  @apply !h-full;
  @apply !text-center;
}

.fc-day.fc-daygrid-day {
  border-radius: 5px !important;
}

.fc .fc-daygrid-day-number {
  @apply !p-2;
}

.fc-scrollgrid-sync-table {
  @apply !w-full;
  border-collapse: separate !important;
  border-spacing: 1px 0 !important;
}

.fc-col-header {
  @apply !w-full;
}
</style>
