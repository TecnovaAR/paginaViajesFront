<template>
  <div
    class="flex h-[50vh] w-full flex-col items-center justify-center bg-cover bg-center text-center text-white lg:h-[30vh] 2xl:h-[35vh]"
    :style="
      'background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%), url(' +
      url +
      ');'
    "
  ></div>
</template>

<script>
export default {
  name: 'SecondHero',
  props: {
    url: String
  }
}
</script>
