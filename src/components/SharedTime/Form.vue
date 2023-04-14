<template>
  <div class="relative mb-8 md:mt-20 2xl:mt-32">
    <div
      class="flex h-fit max-w-xl flex-col items-center justify-center bg-white px-5 py-12 shadow-lg shadow-black md:mx-auto md:max-w-2xl md:py-20 lg:max-w-3xl lg:px-10 3xl:max-w-5xl"
    >
      <div class="mb-5 w-full md:mb-8">
        <h2 class="text-2xl font-bold uppercase md:text-start lg:text-3xl 4xl:text-4xl">
          COTIZA TU TIEMPO COMPARTIDO
        </h2>
      </div>
      <form class="w-full">
        <div class="-mx-3 flex flex-wrap">
          <div class="mb-3 w-full px-3 md:mb-0 md:w-1/2">
            <!-- Name Input -->
            <label class="mb-2 block text-xs font-semibold uppercase tracking-wide text-primary">
              First Name
            </label>
            <input
              class="mb-5 block w-full appearance-none rounded border border-gray bg-transparent px-4 py-3 font-medium leading-tight text-gray focus:border-primary focus:bg-white focus:outline-none"
              type="text"
              placeholder="Nombre Apellido"
            />
            <!-- Email Input -->
            <label class="mb-2 block text-xs font-semibold uppercase tracking-wide text-primary">
              Correo
            </label>
            <input
              class="mb-5 block w-full appearance-none rounded border border-gray bg-transparent px-4 py-3 font-medium leading-tight text-gray focus:border-primary focus:bg-white focus:outline-none"
              type="text"
              placeholder="email@gmail.com"
            />
            <!-- Phone Input -->
            <label class="mb-2 block text-xs font-semibold uppercase tracking-wide text-primary">
              Teléfono
            </label>
            <input
              class="mb-5 block w-full appearance-none rounded border border-gray bg-transparent px-4 py-3 font-medium leading-tight text-gray focus:border-primary focus:bg-white focus:outline-none"
              type="tel"
              placeholder="+52 1234567890"
            />
            <!-- Comments Textarea -->
            <label class="mb-2 block text-xs font-semibold uppercase tracking-wide text-primary">
              Comentarios
            </label>
            <textarea
              class="mb-5 block h-52 w-full resize-none appearance-none rounded border border-gray bg-transparent px-4 py-3 font-medium leading-tight text-gray focus:border-primary focus:bg-white focus:outline-none md:mb-0"
              type="tel"
              placeholder="Escribe todos tus comentarios adicionales..."
            />
          </div>
          <div class="mb-3 w-full px-3 md:mb-0 md:w-1/2">
            <!-- Date Calendar -->
            <label
              class="mb-2 block text-xs font-semibold uppercase tracking-wide text-primary"
              for="grid-state"
            >
              Fechas
            </label>
            <div class="h-100 overflow-hidden">
              <FullCalendar class="h-full overflow-hidden" :options="calendarOptions" />
            </div>
          </div>
        </div>
        <div class="mt-10 flex items-center justify-center">
          <a
            class="w-full rounded border border-black bg-transparent px-8 py-1 text-center text-sm font-semibold uppercase text-black duration-300 ease-in-out hover:cursor-pointer hover:border-white hover:bg-black hover:text-white hover:transition-all md:w-auto 2xl:text-base 3xl:text-lg 4xl:text-xl"
          >
            Cotizar
          </a>
        </div>
      </form>
    </div>

    <div class="absolute top-1/6 -z-2 h-4/6 w-full bg-primary"></div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  name: 'Form',
  setup() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        selectable: true
      }
    }
  },
  components: {
    FullCalendar
  }
}
</script>
