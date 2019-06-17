<template>
  <div class="pagePost">
    <ol>
      <li class="onePost" v-for="post in posts" v-bind:key="post.article_id">
        <router-link :to="{name: 'pagearticle', params:{articleId: post.article_id}}">
          {{post.title}}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'pagepost',

  data() {
    return {
      posts:[]
    }
  },

  components: {
    
  },

  methods: {

  },

  mounted() {
    this.posts = this.$DataProvider.getAllArticlesPosts(true).articles;
  }
}
</script>

<style scoped>

</style>
