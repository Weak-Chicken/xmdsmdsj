<template>
  <div class="userInfo">
    <div class="userIntro">
      <p>user intro here</p>
    </div>
    <div class="userArticle">
      <h3>My Articles</h3>
      <PostArticles :articleFieldSelector="'loggedinuser'"/>
    </div>
  </div>
</template>

<script>
import PostArticles from '@/components/PostArticles.vue';

export default {
  name: 'pageuserinfo',

  data() {
    return {
      userName: this.$route.params.userName,
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
