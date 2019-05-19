<template>
  <div class="articlePage">
    <div v-html="topicPlaceHolder"></div>
  </div>
</template>

<script>
import HtmlMD from '@/temp/data/topics/test html.html';

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
