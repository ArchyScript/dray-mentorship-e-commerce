<template>
  <section id="about-website" class="relative py-8 lg:py-16">
    <div
      class="container grid grid-cols-3 lg:mt-8 gap-6 mx-auto px-2 justify-center"
    >
      <div class="col-span-3 lg:col-span-2 flex flex-1 relative">
        <img
          class="flex justify-center mx-auto p-2 bg-white"
          :src="require('@/assets/mysquareroof/squareroof3.svg')"
          alt=""
        />
      </div>

      <div
        class="col-span-3 lg:col-span-1 flex flex-col lg:items-start mx-auto px-5 sm:px-0"
      >
        <h1
          class="text-mysqr-dark-dark text-2xl mt-10 mx-auto md:text-3xl lg:text-4xl font-semibold lg:text-left pr-4 mb-4 lg:mb-8"
        >
          Product Name
        </h1>

        <p
          class="text-mysqr-dark-dark font-normal lg:text-left text-lg mb-3 lg:mb-6"
        >
          Poduuct is k a.jva ............... . . . . .. . . . . djs /d'l a a'
        </p>

        <div class="flex justify-between mx-auto mt-14 mb-8">
          <button
            @click="buyNow"
            type="button"
            class="lg:py-3 lg:px-8 lg:my-2 lg:mr-4 px-4 py-2 border border-red-400 border-solid rounded-xl"
          >
            Buy Now
          </button>

          <button
            @click="viewProductDetails('12345rekrjrerjer')"
            type="button"
            class="lg:py-3 lg:px-8 lg:my-2 lg:mr-4 px-4 py-2 border border-red-400 border-solid rounded-xl"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

import { useRouter } from 'vue-router'

export default {
  name: 'BestSelling',
  setup() {
    const test = ref('test')
    const router = useRouter()

    const viewProductDetails = (route) => {
      router.push(`/products/${route}`)
      console.log(router)
      console.log(route)
    }

    return {
      test,
      viewProductDetails,
    }
  },
}
</script>
