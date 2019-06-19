<template>
  <div class="pageUpComing">
    <div class="test">
      <!-- <mavon-editor v-model="envMode" @save="saving"/> -->
      <mavon-editor v-html="envMode" :subfield="false" :defaultOpen="'preview'" :toolbarsFlag="false" :boxShadow="false" @change="changeData" />
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
import mdTestFile from '@/temp/data/topics/00003.md';

export default {
  name: 'pageupcoming',

  data() {
    return {
      envMode: mdTestFile
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
.test {
  margin: auto;
  width: 100%;
  height: 100%;
}
</style>
