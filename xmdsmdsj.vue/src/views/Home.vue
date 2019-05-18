<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-html="MDFilePlaceHolder"></div>
  </div>
</template>

<script>
import TestMD from '../../README.md';
import showdown from 'showdown';

export default {
  name: 'home',

  components: {
    showdown,
  },

  data() {
    return {
      MDFilePlaceHolder: TestMD,
    }
  },
}
</script>

<style scoped>

</style>
