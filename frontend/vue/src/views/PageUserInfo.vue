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
      <button v-if="selectMode" @click="deleteArticle">Delete</button>
      <button v-if="selectMode" @click="cancelSwitch">Cancel</button>
      <PostArticles 
        :articleFieldSelector="'loggedinuser'"
        :userId="userId"
        :selectBox="selectMode"
        :removeArticleIds="removeArticleIds"
        @sendingSelectedArticles="onSendingSelectedArticles"
        @removeArticlesFinished="onRemoveArticlesFinished">
      </PostArticles>
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
      removeArticleIds: [],
    }
  },

  components: {
    PostArticles
  },

  computed: {
    editable() {
      return !(this.selectedArticles.length === 1);
    },

    deletable() {
      return !(this.selectedArticles.length > 0);
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

    deleteArticle() {
      this.$DataProvider.deleteArticle(this.selectedArticles);
      this.removeArticleIds = this.selectedArticles;
    },

    cancelSwitch() {
      this.selectMode = false;
    },

    onSendingSelectedArticles(selectedArticles) {
      this.selectedArticles = selectedArticles;
    },

    onRemoveArticlesFinished() {
      this.removeArticleIds = [];
    }
  }
  
}
</script>

<style scoped>
  .userIntro img {
    height: 4rem;
  }
</style>
