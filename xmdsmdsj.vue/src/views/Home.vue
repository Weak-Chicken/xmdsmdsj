<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-html="MDFilePlaceHolder"></div>
  </div>
</template>

<script>
import TestMD from '../../README.md';

export default {
  name: 'home',

  components: {

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
