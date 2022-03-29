<template>
  <section id="home" class="relative pt-36 pb-8 lg:pb-20 bg-mysqr-semi-light">
    <div class="container flex flex-col items-center px-2">
      <div
        class="flex flex-1 flex-col items-center justify-center mx-auto lg:items-start px-5 sm:px-0"
      >
        <h1
          class="text-mysqr-dark-dark text-3xl se mx-auto md:text-4xl lg:text-5xl font-bold text-center mb-2"
        >
          ArchyScript

          <span>Couture</span>
        </h1>

        <p
          class="flex justify-center items-center font-normal text-lg mb-2 lg:mb-3 mx-auto lg:mt-4"
        >
          ...The Home of Design
        </p>

        <marquee class="mt-4 mb-6 sm:w-3/4 lg:w-7/12 mx-auto">
          Patroonize us today ,naalad a da;doma da; ahd a;idna' dda'dma
          adaywpeqw]ewe cp'eomaweu fslsfnsf' ;l'l'rer rk;rkrrk ekw;k
        </marquee>

        <div
          class="flex items-center justify-center text-center mx-auto mt-14 mb-8"
        >
          <button
            type="button"
            class="lg:py-4 lg:px-10 px-4 py-2 border border-red-400 border-solid rounded-xl"
          >
            Explore Now
          </button>
        </div>
      </div>

      <!--
      <div class="w-full h-3/4 mt-10 lg:mt-16">
        <img
          class="flex justify-center items-center w-full mx-auto p-2 bg-white"
          :src="require('@/assets/mysquareroof/squareroof3.svg')"
          alt=""
        />
      </div> -->
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'welcome-page',
  setup() {
    const test = ref('test')

    return {
      test,
    }
  },
}
</script>
