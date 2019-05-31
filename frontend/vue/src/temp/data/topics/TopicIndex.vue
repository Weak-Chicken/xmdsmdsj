<template>
  <div class="topicIndex">

  </div>
</template>

<script>
import h00001 from '@/temp/data/topics/00001.html';
import h00002 from '@/temp/data/topics/00002.html';

export default {
  name: 'topicindex',

  data() {
    return {
      topicArray: [
        {
          id: '00001',
          html: h00001,
          title: 'Build a post page, set the router properly'
        },

        {
          id: '00002',
          html: h00002,
          title: 'Improve the import html file process'
        },
      ]
    }
  },

  mounted() {
    this.$emit('get-all-topics', this.topicArray);
  }
}
</script>

<style scoped>

</style>
