<template>
  <div
    class="mx-4 flex h-fit max-w-xl flex-col items-center justify-center bg-white p-5 shadow-lg shadow-black md:p-8 lg:max-w-3xl lg:px-10 lg:py-12 2xl:pt-20 3xl:max-w-5xl"
  >
    <div class="mb-5 w-full md:mb-8">
      <h2 class="text-2xl font-bold uppercase md:text-start lg:text-3xl 4xl:text-4xl">
        Cotiza tu viaje
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
            class="mb-5 block h-80 w-full resize-none appearance-none rounded border border-gray bg-transparent px-4 py-3 font-medium leading-tight text-gray focus:border-primary focus:bg-white focus:outline-none md:mb-0"
            type="tel"
            placeholder="Escribe todos tus comentarios adicionales..."
          />
        </div>
        <div class="mb-3 w-full px-3 md:mb-0 md:w-1/2">
          <!-- Destination Input -->
          <label
            class="mb-2 block text-xs font-semibold uppercase tracking-wide text-primary"
            for="grid-state"
          >
            Elige tu Destino
          </label>
          <div class="relative">
            <select
              class="mb-5 block w-full appearance-none rounded border border-gray bg-transparent px-4 py-3 pr-8 leading-tight text-gray focus:border-primary focus:bg-white focus:outline-none"
              id="grid-state"
            >
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
          <div class="-mx-3 flex flex-wrap md:mb-5">
            <!-- People Input -->
            <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                class="mb-2 block text-xs font-semibold uppercase tracking-wide text-primary"
                for="grid-city"
              >
                Personas
              </label>
              <div class="flex items-center justify-center gap-2 text-gray">
                <font-awesome-icon :icon="['fas', 'circle-chevron-left']" />
                <input
                  class="block w-2/5 appearance-none rounded border border-gray bg-transparent py-3 text-center leading-tight focus:border-primary focus:bg-white focus:outline-none md:w-1/2"
                  type="number"
                  placeholder="0"
                />
                <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
              </div>
            </div>
            <!-- Transport Input -->
            <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                class="mb-2 block text-xs font-semibold uppercase tracking-wide text-primary"
                for="grid-state"
              >
                Transporte
              </label>
              <div class="relative">
                <select
                  class="block w-full appearance-none rounded border border-gray bg-transparent px-4 py-3 pr-8 leading-tight text-gray focus:border-primary focus:bg-white focus:outline-none"
                  id="grid-state"
                >
                  <option>Camión</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
    <div></div>
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
