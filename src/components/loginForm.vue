<template>
  <div class="log-in">
    <div class="log-in-form-container">
      <h1>Login</h1>
      <p>Please login to your account</p>
      <form>
        <label for="email-or-phone" class="login-email-or-Phone">Email or Phone</label>
        <input
          type="email"
          class="input-container"
          v-model="logInuserInput.email"
          data-test="email-input"
          required
        />
        <label for="password" class="login-password">Password</label>
        <input
          type="password"
          class="input-container"
          v-model="logInuserInput.password"
          data-test="password-input"
          required
        />
        <div class="forgot-pass">Forgot Password?</div>
        <button @click.prevent="logIn()" class="login-Btn" id="submit">
          <h1>Login</h1>
        </button>
        <h3 class="exist-acc">
          Don't have an account?&nbsp;
          <router-link to="/Signup" class="highlight">
            Create an Account</router-link
          >
        </h3>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      logInuserInput: { email: "", password: "" },
    };
  },
  methods: {
    logIn() {
      this.$store.dispatch("logIn", this.logInuserInput);
    },
  },
};
</script>

<style scoped>
.log-in-form-container {
  height: 690px;
  width: 320px;
}

.log-in-form-container p {
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  color: #828282;
}

.highlight {
  font-style: normal;
  color: #d90429;
  text-decoration: none;
}

.login-password {
  padding-top: 24px;
  margin: 0px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}

.login-email-or-Phone {
  font-weight: bold;
  padding-top: 32px;
  margin: 0px;
  font-size: 14px;
  line-height: 19px;
  margin: 0px;
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}
.input-container {
  margin-top: 8px;
  width: 320px;
  height: 50px;
  font-size: large;
  background: #e8e8e8;
  border: initial;
  border-radius: 12px;
}
.login-Btn {
  margin-top: 32px;
  width: 320px;
  height: 50px;
  padding: 0;
  background: #d90429;
  box-shadow: 0px 6px 28px 5px rgba(254, 45, 23, 0.3);
  border-radius: 12px;
  border: initial;
  cursor: pointer;
}
.login-Btn h1 {
  padding-left: 136px;
  padding-right: 135px;

  margin: 0px;
  padding-top: 14px;
  padding-bottom: 11px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
}

.forgot-pass {
  padding-top: 12px;
  margin: 0px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  text-align: right;
  justify-content: flex-end;
  color: #d90429;
}
.exist-acc {
  margin-top: 32px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #828282;
  width: 302px;
  height: 19px;
  margin-left: 10px;
  margin-right: 49px;
}
@media screen and (min-width: 1080px) {
  .log-in-form-container {
    margin: 110px 181px 62px 182px;
  }
}
</style>
