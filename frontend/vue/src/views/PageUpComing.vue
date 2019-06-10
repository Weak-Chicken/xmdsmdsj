<template>
  <div class="pageUpComing">
    <div class="test">
      {{ envMode }}
    </div>
    <!-- <button @click="addHellows">Change</button> -->
    <!-- <p>Aloha!</p> -->
  </div>
</template>

<script>
import DataProvider from '@/components/utils/DataProvider.js';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'pageupcoming',

  data() {
    return {
      envMode: process.env.VUE_APP_ENV_CODE
    }
  },

  // computed: {
  //   ...mapState({
  //     count_test: state => state.count_test,
  //   })
  // },

  // methods: {
  //   ...mapActions({
  //     addHellows: 'addHellows',
  //     addHellowsAlt: 'addHellowsAlt',
  //   })
  // },
}
</script>

<style scoped>

</style>
