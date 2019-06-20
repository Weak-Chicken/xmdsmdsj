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
      currentArticleId: this.$route.params.articleId,
    }
  },

  components: {
    mavonEditor
  },

  methods: {
    saveArticle() {
      if (!this.$route.params.article) {
        this.$DataProvider.createArticle(this.articleContent);
      } else {
        this.$DataProvider.updateArticle(this.articleContent);
      }
    }
  },

  mounted() {
    if (this.currentArticleId !== 'Untitled') {
      this.articleContent = this.$DataProvider.getArticleById(true, this.currentArticleId).article.content;
    }
  }
}
</script>

<style scoped>

</style>
