<template>
  <div class="homePage">
    <div v-html="MDFilePlaceHolder"></div>
  </div>
</template>

<script>
import TestMD from '../../README.md';
import axios from 'axios';

export default {
  name: 'homepage',

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
