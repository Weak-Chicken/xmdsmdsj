<template>
  <div class="userInfo">
    <h1>My Articles</h1>
    <p>I guess you are {{ userName }}</p>
  </div>
</template>

<script>
export default {
  name: 'pageuserinfo',

  data() {
    return {
      userName: this.$route.params.userName,
    }
  }
}
</script>

<style scoped>

</style>
