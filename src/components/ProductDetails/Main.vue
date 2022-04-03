<template>
  <div class="">
    <Details />
  </div>
</template>

<script>
import { ref } from 'vue'

import Details from './Details.vue'

export default {
  name: 'details-main-page',
  setup() {
    const readersNumber = ref('test')
    const book = ref('testing')

    // expose to template
    return {
      readersNumber,
      book,
    }
  },
  components: {
    Details,
  },
}
</script>
