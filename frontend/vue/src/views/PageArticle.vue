<template>
  <div class="pageArticle">
    <mavon-editor v-html="articlePlaceHolder" :subfield="false" :defaultOpen="'preview'" :toolbarsFlag="false" :boxShadow="false"/>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
  name: 'pagearticle',

  data() {
    return {
      articlePlaceHolder: '',
    }
  },

  components: {
    mavonEditor
  },

  methods: {
    
  },

  created() {
    this.articlePlaceHolder = this.$DataProvider.getArticlesById(true, this.$route.params.articleId).article.content;
  },
}
</script>

<style scoped>

</style>
