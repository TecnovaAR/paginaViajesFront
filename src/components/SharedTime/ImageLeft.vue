<template>
  <div class="mx-4 mb-10 md:mx-8 md:mb-20 lg:mx-0 lg:flex lg:gap-10 4xl:mb-32">
    <div class="mb-6 lg:mb-0 lg:basis-5/12 2xl:basis-4/12">
      <img :src="content.image" alt="Image" class="h-full w-full" />
    </div>

    <div class="lg:flex lg:basis-7/12 lg:flex-col lg:justify-center lg:py-20 3xl:py-28">
      <div class="mb-6 lg:mb-10 lg:w-5/6 lg:last-of-type:mb-0 3xl:mb-16">
        <h2
          class="mb-6 font-playfair text-xl font-semibold uppercase text-primary md:text-2xl lg:text-3xl xl:mb-10 2xl:text-4xl 4xl:mb-12 4xl:text-5xl 5xl:text-6xl"
        >
          Amenidades
        </h2>

        <div v-if="content.amenities.length == 10">
          <ul class="list-inside list-disc">
            <li
              v-for="text in content.amenities"
              class="py-1 2xl:text-lg 4xl:text-2xl 5xl:py-3 5xl:text-3xl"
            >
              {{ text }}
            </li>
          </ul>
        </div>

        <div v-else>
          <div class="flex flex-col md:flex-row">
            <div class="flex-1">
              <ul class="list-inside list-disc">
                <li
                  v-for="text in list1"
                  class="py-1 2xl:text-lg 4xl:text-2xl 5xl:py-3 5xl:text-3xl"
                >
                  {{ text }}
                </li>
              </ul>
            </div>

            <div class="flex-1">
              <ul class="list-inside list-disc">
                <li
                  v-for="text in list2"
                  class="py-1 2xl:text-lg 4xl:text-2xl 5xl:py-3 5xl:text-3xl"
                >
                  {{ text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageLeft',
  props: {
    content: Object
  },
  data() {
    return {
      list1: [],
      list2: []
    }
  },
  created() {
    this.divideList(this.content.amenities)
  },
  methods: {
    divideList(list) {
      let half = Math.ceil(list.length / 2)
      this.list1 = list.slice(0, half)
      this.list2 = list.slice(half, list.length)
    }
  }
}
</script>
