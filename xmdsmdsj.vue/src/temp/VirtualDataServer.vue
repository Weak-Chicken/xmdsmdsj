<template>
  <div class="virtualDataServer">

  </div>
</template>

<script>
import HtmlMD from '@/temp/data/topics/01.html';

export default {
  name: 'virtualdataserver',

  data() {
    return {
      allPosts: [
        {
          id: '01',
          html: HtmlMD,
          title: 'Build a post page, set the router properly',
        },
      ]
    }
  },

  mounted() {
      this.$emit('get-all-posts', this.allPosts);
  },
}
</script>

<style scoped>

</style>
