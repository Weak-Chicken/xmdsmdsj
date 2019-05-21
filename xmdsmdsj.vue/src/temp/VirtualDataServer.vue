<template>
  <div class="virtualDataServer">

  </div>
</template>

<script>
import HtmlMD from '@/temp/data/topics/01.html';
import { getAllPosts } from '@/temp/data/topics';

export default {
  name: 'virtualdataserver',

  data() {
    return {
      allPosts: []
    }
  },

  mounted() {
    this.allPosts = getAllPosts();
    this.$emit('get-all-posts', this.allPosts);
  },

  componets: {
    getAllPosts,
  },
}
</script>

<style scoped>

</style>
