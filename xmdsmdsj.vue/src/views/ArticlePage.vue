<template>
  <div class="articlePage">
    <VirtualDataServer @get-all-posts="getPosts"></VirtualDataServer>
    <div v-html="topicPlaceHolder"></div>
  </div>
</template>

<script>
import VirtualDataServer from '@/temp/VirtualDataServer.vue';

export default {
  name: 'articlepage',

  data() {
    return {
      topicPlaceHolder: '',
    }
  },

  components: {
    VirtualDataServer,
  },

  methods: {
    getPosts(allPosts) {
      // this.topicPlaceHolder = allPosts.filter(post => post.id == this.$route.params.articleId)[0].html; 
      this.topicPlaceHolder = allPosts.filter(post => post.id == this.$route.params.articleId)[0]; 
    }
  }
}
</script>

<style scoped>

</style>
