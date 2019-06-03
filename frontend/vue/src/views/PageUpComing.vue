<template>
  <div class="pageUpComing">
    <div class="test">
      {{ envVariable }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageupcoming',

  data() {
    return {
      envVariable: process.env.VUE_APP_XM,
    }
  },

  
}
</script>

<style scoped>

</style>
