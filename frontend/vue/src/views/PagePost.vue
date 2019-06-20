<template>
  <div class="pagePost">
    <PostArticles :articleFieldSelector="'ALL'"/>
  </div>
</template>

<script>
import PostArticles from '@/components/PostArticles.vue';

export default {
  name: 'pagepost',

  data() {
    return {

    }
  },

  components: {
    PostArticles
  },

  methods: {

  },
}
</script>

<style scoped>

</style>
