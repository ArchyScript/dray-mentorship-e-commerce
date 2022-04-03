<template>
  <section id="home" class="relative pt-28 pb-8 lg:pb-20">
    <div class="container flex flex-col lg:mt-8 mx-auto px-2">
      <div class="flex flex-col">
        <div class="flex flex-1 relative w-full mb-2 md:mb-4 lg:mb-6">
          <img
            class="flex justify-center mx-auto w-full h-3/4 bg-white rounded-3xl"
            :src="require('@/assets/mysquareroof/squareroof3.svg')"
            alt=""
          />
        </div>

        <div class="grid grid-cols-3 gap-6 flex-1 relative">
          <div
            class="col-span-3 md:col-span-1"
            v-for="(product_image, index) in 3"
            :key="`${product_image}_${index}`"
          >
            <img
              class="flex justify-center mx-auto bg-white md:h-full h-1/2"
              :src="require('@/assets/mysquareroof/squareroof3.svg')"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="product_info my-10">
        <form>
          <div class="grid grid-cols-2 gap-10 my-2">
            <div class="col-span-2 sm:col-span-1 my-4 lg:my-2">
              <div class="text-xl md:text-2xl font-semibold mb-6 lg:mb-10">
                Product Details
              </div>

              <div class="my-2 md:my-3 lg:my-4">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 items-start"
                >
                  Name
                </label>

                <input
                  type="text"
                  disabled
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  :value="product_name"
                />
              </div>

              <div class="my-2 md:my-3 lg:my-4">
                <label
                  id="product_description"
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 items-start"
                >
                  Description
                </label>

                <textarea
                  :value="product_description"
                  id=""
                  disabled
                  rows="5"
                  class="w-full h-full border border-solid border-gray-500 outline-none bg-gray-50 text-gray-900 text-sm rounded-lg px-4 py-2.5"
                ></textarea>
              </div>

              <div class="my-2 md:my-3 lg:my-4">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 items-start"
                >
                  Price
                </label>

                <input
                  type="text"
                  disabled
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Amount"
                  :value="`$ ${product_price}.00`"
                />
              </div>
            </div>

            <div class="col-span-2 sm:col-span-1 my-4 lg:my-2">
              <div class="text-xl md:text-2xl font-semibold mb-6 lg:mb-10">
                Customers Only
              </div>

              <div class="my-2 md:my-3 lg:my-4">
                <label
                  for="customer_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 items-start"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="customer_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Customers Name"
                  :value="customers_name"
                />
              </div>

              <div class="my-2 md:my-3 lg:my-4">
                <label
                  for="customer_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 items-start"
                >
                  Email
                </label>

                <input
                  type="text"
                  id="customer_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Customers Email"
                  :value="customers_email"
                />
              </div>

              <div class="my-2 md:my-3 lg:my-4">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 items-start"
                >
                  How many {{ product_name }} do you want?
                </label>

                <input
                  type="number"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Amount"
                  :value="amount_of_product_bought"
                />
              </div>
            </div>

            <div class="col-span-2 mt-6 text-sm md:text-lg">
              <p class="my-2 text-gray-500 dark:text-gray-400">
                We'll never share your details. Read our
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Privacy Policy
                </a>
                .
              </p>

              <div class="ml-3">
                <label
                  for="terms"
                  class="font-medium text-gray-900 dark:text-gray-300"
                >
                  <input type="checkbox" />
                  I agree with the
                  <a
                    href="#"
                    class="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                </label>
              </div>

              <div class="mt-6">
                <!-- <paystack
                  :amount="product_price * amount_of_product_bought * 100"
                  :email="customers_email"
                  :paystackkey="PUBLIC_KEY"
                  :reference="reference"
                  :callback="processPayment"
                  :close="close"
                >
                  Make Payment
                </paystack> -->

                <button
                  @click="payWithPaystack"
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 md:px-8 md:py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Pay With Paystack
                </button>
              </div>
            </div>
          </div>
        </form>

        <!-- <div class="flex flex-1 relative w-full mb-2 md:mb-4 lg:mb-6">
            <img
              class="flex justify-center mx-auto w-full h-3/4 bg-white rounded-3xl"
              :src="require('@/assets/mysquareroof/squareroof3.svg')"
              alt=""
            />
          </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
// import paystack from 'vue-paystack'
import { useRouter, useRoute } from 'vue-router'
import products from '@/database/db.js'

export default {
  name: 'details-page',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const product_id = ref('')
    const product_name = ref('')
    const product_description = ref('')
    const product_price = ref(9)
    // const product_cover_image = ref('')
    const customers_name = ref('Dasaolu Daniel')
    const customers_email = ref('yungdansa@gmabsjhil.com')
    const amount_of_product_bought = ref(1)
    // const PUBLIC_KEY = "sk_test_dfc488d7f063200cffd035dd720e221f6f945962"
    const PUBLIC_KEY = 'pk_test_3af5f370ab741fb7ce7d5f574dab3659a24a8048'

    const payWithPaystack = (event) => {
      event.preventDefault()
    }

    onMounted(() => {
      product_id.value = route.params.product_id

      products.forEach((product) => {
        console.log(product.id)
        if (product.id === product_id.value) {
          product_id.value = product.id
          product_name.value = products[0].name
          product_description.value = products[0].description
          product_price.value = products[0].price
        } else return
      })
      // console.log('test before')
      // product_name.value = products[0].name
      // product_description.value = products[0].description
      // product_price.value = products[0].price
      console.log(route.params)
      console.log(router)
      console.log(product_id)

      // product_cover_image.value = products[0].image.cover
      // console.log(products)
    })

    // const reference = computed(() => {
    //   let text = ''
    //   let possible =
    //     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    //   for (let i = 0; i < 10; i++)
    //     text += possible.charAt(Math.floor(Math.random() * possible.length))
    //   return text
    // })

    const reference = () => {
      const text =
        'WHDWLVjdfjlsfljjVjdfjlsfljjbrekWHDWLVjdfjlsfljjbrekWHDWLVjdfjlsfljjbrek'
      return text
    }
    const processPayment = () => {
      window.alert('Payment recieved')
    }
    const close = () => {
      console.log('You closed checkout page')
    }

    return {
      // getProductDetails,
      payWithPaystack,
      PUBLIC_KEY,
      processPayment,
      close,
      reference,
      product_name,
      product_description,
      product_price,
      customers_name,
      customers_email,
      amount_of_product_bought,
    }
  },
  components: {
    // paystack,
  },
}
</script>
