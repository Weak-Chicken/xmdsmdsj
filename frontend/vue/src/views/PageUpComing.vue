<template>
  <div class="pageUpComing">
    <!-- <div class="test">
      {{ count_test }}
    </div>
    <button @click="addHellows">Change</button> -->
    <p>Aloha!</p>
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
