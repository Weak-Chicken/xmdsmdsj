<template>
  <div id="app">
    <Header />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import showdown from 'showdown';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'app',

  components: {
    Header,
    Footer,
    showdown,
  },

};
</script>


<style>
  html {
    margin: 0rem 30rem 0rem;
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
