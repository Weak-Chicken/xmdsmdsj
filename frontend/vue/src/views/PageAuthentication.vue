<template>
  <div class="pageAuthentication">
    <div v-if="currentPage === '/login'">
      <div class="loginBox">
        <div class="loginAccount">
          <div class="loginLabel">
            <label for="account">Account:</label>
          </div> 
          <div class="loginInput">
            <input v-model="userName" type="text" id="account">
          </div>
        </div>
        <div class="loginPassword">
          <div class="loginLabel">
            <label for="password">Password:</label>
          </div>
          <div class="loginInput">
            <input v-model="userPwd" type="password" id="password">
          </div>
        </div>
        <div class="loginRemeber">
          <p>Current no remeber option</p>
        </div>
        <div class="loginButtons">
          <button @click="signin">Sign in</button>
        </div>
        <div v-if="loginResults != ''" class="loginErrors">
          <div v-if="loginResults.success === false">
            <p>{{ loginErrorMessage }}</p>
          </div>
        </div>
        <div class="loginForgotPassword">
          <p>Forgot password? Sing a song maybe :D</p>
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
import ErrorCodes from '@/components/utils/ErrorCodes.js';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'pageauthentication',

  data() {
    return {
      currentPage: '',
      userName: '',
      userPwd: '',
      loginResults: '',
      loginErrorMessage: 'Login Error!',
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

  computed: {
    ...mapGetters ([
      'checkLogin',
      'getUserData',
    ]),
  },
  
  methods: {
    ...mapActions ({
      loggingIn: 'loggingIn',
      loggingOut: 'loggingOut',
    }),

    async signin() {
      if (!this.userName) {
        alert('Please input your account!');
      } else if (!this.userPwd) {
        alert('Please input your password!');
      } else {
        let signInData = {
          userName: this.userName,
          userPwd: this.userPwd,
        }

        // this.loginResults = DataProvider.userLogin(process.env.VUE_APP_ENV_CODE, signInData, true);
        await this.axios.post('/v1/User/Login/', {
          userName: this.userName,
          userPwd: this.userPwd,
        })
        .then((response) => { this.loginResults = response.data })
        .catch((error) => { this.loginResults = error.response.data });

        if (this.loginResults.success) {
          this.loggingIn(this.loginResults.userData);
          this.$router.push({name: 'pageuserinfo', params: {userId: this.$store.getters.getUserData.uuid}})
        } else {
          this.loginErrorMessage = ErrorCodes.getLoginErrorMessage(this.loginResults.flag);
        }
      }
    },

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

.loginBox .loginErrors p {
  padding-top: 0.5rem;
  color: red;
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
