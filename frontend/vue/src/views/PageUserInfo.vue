<template>
  <div class="userInfo">
    <div class="userIntro">
      <p>user intro here</p>
    </div>
    <div class="userArticle">
      <h3>My Articles</h3>
      <button @click="createArticle">Add New</button>
      <button id="select" @click="switchSelector">Select</button>
      <button v-if="selectMode" @click="editArticle" :disabled="editable">Edit</button>
      <button v-if="selectMode">Delete</button>
      <button v-if="selectMode">Confirm</button>
      <button v-if="selectMode" @click="cancelSwitch">Cancel</button>
      <PostArticles :articleFieldSelector="'loggedinuser'" :userId="userId" :selectBox="selectMode" @sendingSelectedArticles="receivingSelectedArticles"/>
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
      selectMode: false,
      selectedArticles: [],
    }
  },

  components: {
    PostArticles
  },

  computed: {
    editable() {
      return !(this.selectedArticles.length === 1);
    }
  },

  methods: {
    createArticle() {
      this.$router.push({name: 'pageeditor', params: {userId: this.$store.getters.getUserData.uuid, articleId: 'Untitled'}});
    },

    switchSelector() {
      this.selectMode = !this.selectMode;
    },

    editArticle() {
      this.$router.push({name: 'pageeditor', params: {userId: this.$store.getters.getUserData.uuid, articleId: this.selectedArticles[0]}});
    },

    cancelSwitch() {
      this.selectMode = false;
    },

    receivingSelectedArticles(selectedArticles) {
      this.selectedArticles = selectedArticles;
    }
  }
  
}
</script>

<style scoped>
  .userIntro img {
    height: 4rem;
  }
</style>
