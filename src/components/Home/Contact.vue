<template>
  <div
    class="mx-4 mb-20 flex flex-col items-center justify-center md:mx-8 md:my-20 md:flex-row md:items-start md:gap-5 lg:mx-auto lg:max-w-screen-md lg:gap-20 xl:max-w-screen-lg xl:gap-5 4xl:my-32 4xl:max-w-screen-xl 5xl:max-w-screen-2xl"
  >
    <div class="md:w-1/2">
      <div class="mb-8 w-full text-center md:text-start">
        <h2 class="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl 4xl:text-6xl 5xl:text-7xl">
          CONTÁCTANOS
        </h2>
        <p class="text-lg font-light xl:w-3/4 xl:text-xl 2xl:text-2xl 4xl:text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    <div class="w-10/12 md:w-1/2">
      <div
        class="mb-8 flex w-full justify-between text-4xl lg:justify-stretch lg:gap-5 4xl:text-5xl 5xl:text-6xl"
      >
        <a v-for="link in social" :href="link.to">
          <font-awesome-icon :icon="['fab', link.name]" style="color: #0069b5" />
        </a>
      </div>
      <div class="mb-3 flex items-center justify-center gap-2">
        <div class="flex w-1/12 justify-center">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            style="color: #0069b5"
            class="text-2xl 4xl:text-3xl 5xl:text-4xl"
          />
        </div>
        <div class="w-11/12 4xl:text-lg 5xl:text-xl">
          <p>name@mail.com</p>
        </div>
      </div>

      <div class="mb-3 flex items-center justify-center gap-2">
        <div class="flex w-1/12 justify-center">
          <font-awesome-icon
            :icon="['fas', 'mobile']"
            style="color: #0069b5"
            class="text-2xl 4xl:text-3xl 5xl:text-4xl"
          />
        </div>
        <div class="w-11/12 4xl:text-lg 5xl:text-xl">
          <p>+52 442 123 4567</p>
        </div>
      </div>

      <div class="flex items-center justify-center gap-2">
        <div class="flex w-1/12 justify-center">
          <font-awesome-icon
            :icon="['fas', 'location-dot']"
            style="color: #0069b5"
            class="text-2xl 4xl:text-3xl 5xl:text-4xl"
          />
        </div>
        <div class="w-11/12 4xl:text-lg 5xl:text-xl">
          <p>
            Av Fray Luis de León 8051, Centro Sur 76090 Querétaro Centro, Querétaro Arteaga, México.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  setup() {
    return {
      social: [
        { name: 'facebook', to: '#' },
        { name: 'instagram', to: '#' },
        { name: 'linkedin', to: '#' },
        { name: 'youtube', to: '#' }
      ]
    }
  }
}
</script>
