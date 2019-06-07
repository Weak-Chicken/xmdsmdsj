<template>
  <div id="app">
    <TheTopHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheTopHeader from '@/components/TheTopHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'app',

  components: {
    TheTopHeader,
    TheFooter,
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
