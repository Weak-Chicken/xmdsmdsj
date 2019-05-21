<template>
  <div class="postPage">
    <VirtualDataServer @get-all-posts="getPosts"></VirtualDataServer>
    <div class="onePagePosts" v-for="post in posts" v-bind:key="post.id">
      <router-link :to="{name: 'articlepage', params:{articleId: post.id, articleHtml: post.html}}">
        {{post.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
import VirtualDataServer from '@/temp/VirtualDataServer.vue';

export default {
  name: 'postpage',

  data() {
    return {
      posts:[]
    }
  },

  components: {
    VirtualDataServer,
  },

  methods: {
    getPosts(allPosts) {
      this.posts = allPosts;
    }
  }
}
</script>

<style scoped>

</style>
