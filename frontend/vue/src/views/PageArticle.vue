<template>
  <div class="pageArticle">
    <div v-html="topicPlaceHolder"></div>
  </div>
</template>

<script>
export default {
  name: 'pagearticle',

  data() {
    return {
      topicPlaceHolder: '',
    }
  },

  components: {
    
  },

  methods: {
    
  },

  created() {
    this.topicPlaceHolder = this.$DataProvider.getArticlesById(true, this.$route.params.articleId).article.content;
  }
}
</script>

<style scoped>

</style>
