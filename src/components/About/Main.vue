<template>
  <div class="bg-mysqr-light">
    <!-- <Topbar /> -->
    <Welcome />
    <AboutThisProject />
    <ClonedSitesLinksAndDescription />
    <ContactUs />
  </div>
</template>

<script>
import { ref } from 'vue'

import Welcome from './Welcome.vue'
import AboutThisProject from './BestSelling.vue'
import ClonedSitesLinksAndDescription from './HotProduct.vue'
import ContactUs from './ContactUs.vue'

export default {
  name: 'main-page',
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
    Welcome,
    AboutThisProject,
    ClonedSitesLinksAndDescription,
    ContactUs,
  },
}
</script>
