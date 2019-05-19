<template>
  <div class="articlePage">
    <div v-html="topicPlaceHolder"></div>
  </div>
</template>

<script>
import HtmlMD from '@/temp/data/topics/01.html';

export default {
  name: 'articlepage',

  data() {
    return {
      topicPlaceHolder: HtmlMD
    }
  }
}
</script>

<style scoped>

</style>
