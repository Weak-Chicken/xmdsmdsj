<template>
  <div class="pagePost">
    <VirtualDataServer @get-all-posts="getPosts"></VirtualDataServer>
    <ol>
      <li class="onePost" v-for="post in posts" v-bind:key="post.id">
        <router-link :to="{name: 'pagearticle', params:{articleId: post.id, articleHtml: post.html}}">
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
    getPosts(allPosts) {
      this.posts = allPosts;
      // this.posts.reverse();
    }
  }
}
</script>

<style scoped>

</style>
