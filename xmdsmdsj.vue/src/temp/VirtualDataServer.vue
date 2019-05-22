<template>
  <div class="virtualDataServer">
    <TopicIndex @get-all-topics="getAllTopics"></TopicIndex>
  </div>
</template>

<script>
import TopicIndex from '@/temp/data/topics/TopicIndex.vue';

export default {
  name: 'virtualdataserver',

  data() {
    return {
      allPosts: []
    }
  },

  // mounted() {
  //   this.allPosts = getAllPosts();
  //   this.$emit('get-all-posts', this.allPosts);
  // },

  components: {
    TopicIndex,
  },

  methods: {
    getAllTopics(allTopics) {
      this.allPosts = allTopics;
      this.$emit('get-all-posts', this.allPosts);
    }
  }
}
</script>

<style scoped>

</style>
