<template>
  <div class="pageArticle">
    <VirtualDataServer @get-all-posts="getPosts"></VirtualDataServer>
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
    getPosts(allPosts) {
      this.topicPlaceHolder = allPosts.filter(post => post.id == this.$route.params.articleId)[0].html;  
    }
  }
}
</script>

<style scoped>

</style>
