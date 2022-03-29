<template>
  <div>
    <Topbar />
    <div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'

import Topbar from './components/Topbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'LandingPage',
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
    Topbar,
    Footer,
  },
}
</script>

<style>
asc-btn {
  @apply px-6 py-2 border border-solid border-black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
