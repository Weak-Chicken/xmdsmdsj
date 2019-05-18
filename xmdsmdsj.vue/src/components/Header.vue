<template>
  <div class="header">
    <router-link to="/">Home</router-link> 
    <router-link to="/about" class="to-right">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'header',

  components: {

  },
};
</script>

<style scoped>
  .header {
    font-size: 24px;
    background-color: rgb(255, 255, 255);
    padding: 1rem 1rem 1rem 0rem;
  }

  /*
   Use <a> to opreate router-link. Because router-link is used
  for Vue to render the page, it will not appear in the final 
  rendered page. 
  */
  a {
    text-decoration: none;
    color: black;
    margin-left: 1.5rem;
  }

  .header .to-right {
    float: right;
    margin-right: 1.5rem;
  }
</style>
