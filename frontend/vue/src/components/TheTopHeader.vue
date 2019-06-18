<template>
  <div class="theTopHeader">
    <router-link to="/">Home</router-link> 
    <router-link to="/article">Articles</router-link>
    <router-link to="/upcoming">Up Coming</router-link>
    <router-link to="/about">About</router-link>
    <router-link v-if="!checkLogin" to="/login" class="to-right">Sign in / Sign up</router-link>
    <router-link v-else-if="checkLogin" :to="{name: 'pageuserinfo', params: { userName: this.$store.getters.getUserData.userName }}" class="to-right">Welcome! {{ this.$store.getters.getUserData.userName }}</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'thetopheader',

  components: {

  },

  computed: {
    ...mapGetters ({
      checkLogin: 'checkLogin',
      getUserName: 'getUserData',
    })
  },
};
</script>

<style scoped>
  .theTopHeader {
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
    margin-left: 2.5rem;
  }

  .theTopHeader .to-right {
    float: right;
    margin-right: 2.5rem;
  }
</style>
