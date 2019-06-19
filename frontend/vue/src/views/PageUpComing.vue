<template>
  <div class="pageUpComing">
    <div class="test">
      <mavon-editor v-model="envMode" @save="saving"/>
    </div>
    <!-- <button @click="addHellows">Change</button> -->
    <!-- <p>Aloha!</p> -->
  </div>
</template>

<script>
import DataProvider from '@/components/utils/DataProvider.js';
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'pageupcoming',

  data() {
    return {
      envMode: ''
    }
  },

  components: {
    mavonEditor
  },

  // computed: {
  //   ...mapState({
  //     count_test: state => state.count_test,
  //   })
  // },

  methods: {
    saving() {
      console.log('saving is clicked')
      console.log(this.envMode)
    }
  },
}
</script>

<style scoped>

</style>
