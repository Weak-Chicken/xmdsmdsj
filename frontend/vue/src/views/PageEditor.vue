<template>
  <div class="pageEditor">
    <mavon-editor v-model="articleContent" @save="saveArticle"/>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
  name: 'pageeditor',

  data() {
    return {
      articleContent: '',
      currentUser: this.$route.params.userId.toString(),
      currentArticleTitle: this.$route.params.articleTitle,
    }
  },

  components: {
    mavonEditor
  },

  methods: {
    saveArticle() {
      this.$DataProvider.createArticle(this.articleContent);
    }
  }
}
</script>

<style scoped>

</style>
