<template>
  <div class="userInfo">
    <div class="userIntro">
      <p>user intro here</p>
    </div>
    <div class="userArticle">
      <h3>My Articles</h3>
      <PostArticles :articleFieldSelector="'loggedinuser'" :userId="this.userId"/>
    </div>
  </div>
</template>

<script>
import PostArticles from '@/components/PostArticles.vue';

export default {
  name: 'pageuserinfo',

  data() {
    return {
      userId: this.$route.params.userId,
    }
  },

  components: {
    PostArticles
  }
  
}
</script>

<style scoped>
  .userIntro img {
    height: 4rem;
  }
</style>
