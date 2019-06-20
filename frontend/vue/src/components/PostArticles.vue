<template>
  <div class="postArticles">
    <ol>
      <li class="onePost" v-for="articlePost in articlePosts" v-bind:key="articlePost.article_id">
        <router-link :to="{name: 'pagearticle', params:{articleId: articlePost.article_id}}">
          {{articlePost.title}}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'postarticles',

  props: {
    articleFieldSelector: {
      type: String,
      required: true,
      validator: function (value) {
        return [
          'all',
          'loggedinuser',
        ].indexOf(value.toLowerCase()) !== -1;
      }
    },
    userId: {
      type: String,
      required: false,
    }
  },

  computed: {

  },

  data() {
    return {
      articlePosts: [],
      RetrieveMode: undefined,
    }
  },

  mounted() {
    switch(this.articleFieldSelector.toLowerCase()) {
      case 'all':
        this.RetrieveMode = this.$options.methods.getAllArticles;
        break;
      case 'loggedinuser':
        this.RetrieveMode = this.$options.methods.getLoggedInUsersArticles;
        break;
      default:
        console.log('No effective article field selector defined!');
        console.log('Set mode to default');
        this.RetrieveMode = this.$options.methods.getAllArticles;
      break;
    };

    this.RetrieveMode();
  },

  methods: {
    getAllArticles() {
      this.articlePosts = this.$DataProvider.getAllArticlesPosts(true).articles;
    },

    getLoggedInUsersArticles() {
      console.log(this.$store.getters.getUserData.uuid)
      this.articlePosts = this.$DataProvider.getArticlesOfUser(true, this.userId).articles;
    }
  },
}
</script>

<style scoped>

</style>
