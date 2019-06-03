<template>
  <div class="pagehome">
    <div v-html="MDFilePlaceHolder"></div>
  </div>
</template>

<script>
import TestMD from '../../README.md';
import axios from 'axios';

export default {
  name: 'pagehome',

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
