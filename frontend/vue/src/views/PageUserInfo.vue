<template>
  <div class="userInfo">
    <div class="userIntro">
      <p>user intro here</p>
    </div>
    <div class="userArticle">
      <h3>My Articles</h3>
      <button id="create" @click="createArticle">Add New</button>
      <button id="select">Select</button>
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
      userId: this.$route.params.userId.toString(),
    }
  },

  components: {
    PostArticles
  },

  methods: {
    createArticle() {
      this.$router.push({name: 'pageeditor', params: {userId: this.$store.getters.getUserData.uuid, articleTitle: 'Untitled'}});
    }
  }
  
}
</script>

<style scoped>
  .userIntro img {
    height: 4rem;
  }
</style>
