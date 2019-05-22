<template>
  <div id="app">
    <HeaderTop />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'app',

  components: {
    HeaderTop,
    Footer,
  },

};
</script>


<style>
  html {
    margin: 0rem 25rem 0rem;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      font-size: 20px;
  }

  body,div,span,a,p,ul,li {
    margin: 0;
    padding: 0;
  }
</style>
