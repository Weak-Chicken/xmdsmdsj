<template>
  <div class="authenticationPage">
    <div v-if="currentPage === '/login'">
      <div class="loginBox">
        <div class="loginAccount">
          <div class="loginLabel">
            <label for="account">Account:</label>
          </div> 
          <div class="loginInput">
            <input type="text" id="account">
          </div>
        </div>
        <div class="loginPassword">
          <div class="loginLabel">
            <label for="password">Password:</label>
          </div>
          <div class="loginInput">
            <input type="password" id="password">
          </div>
        </div>
        <div class="loginRemeber">
          <p>Current no remeber option</p>
        </div>
        <div class="loginButtons">
          <button>Sign in</button>
        </div>
        <div class="loginForgotPassword">
          <p>Forgot password?</p>
        </div>
        <div class="loginRegister">
          <p>Don't have an account? <router-link to="/register" class="to-right">Join us</router-link></p>
        </div>
      </div>
    </div>
    <div v-else-if="currentPage === '/register'">
      <h3>Sorry, We are currently not accepting new members.</h3>
      <router-link to="/login" class="to-right">Go back</router-link>
    </div>
    <div v-else>
      <h2>Error! URI is not set!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authenticationpage',

  data() {
    return {
      currentPage: '',

    }
  },

  created() {
    this.currentPage = this.$route.path;
  },

  watch: {
		'$route.path' (val) {
      this.currentPage = val;
		}
  },
  
  methods: {

  },
}
</script>

<style scoped>
.loginBox {
  /* background-color: aliceblue; */
  text-align: center;
  margin: 2rem 20rem 0rem 20rem;
}

.loginBox .loginLabel {
  text-align: left;
  margin-left: 6rem;
  padding: 0.5rem;
}

.loginBox .loginInput input {
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 10px 5px;
  width: 58%;
  font-size: 16px;
}

.loginBox .loginInput input:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
}

.loginBox .loginAccount {
  padding: 1rem 0rem 1rem 0rem;
}

.loginBox .loginPassword {
  padding: 1rem 0rem 1rem 0rem;
}

.loginBox .loginButtons button {
  background-color: white;
  outline-style: none;
  border: 1px solid rgba(58, 91, 199, 0.87);
  border-radius: 12px;
  color:rgba(58, 91, 199, 0.87);
  font-size: 24px;
  padding: 0.5rem 1.5rem;
}

.loginBox .loginButtons button:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  color:rgba(89, 116, 202, 0.87);
}

.loginBox .loginRemeber {
  font-size: 14px;
  color: gray;
  padding: 1rem 0rem 1rem 0rem;
}

.loginBox .loginForgotPassword {
  font-size: 14px;
  color: gray;
  padding: 1rem 0rem 1rem 0rem;
}
</style>
