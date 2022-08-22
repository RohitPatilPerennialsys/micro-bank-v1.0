<template>
  <div class="wrapper">
    <div class="dash-menu-options-container">
      <div class="dash-menu-options-wrapper">
        <div class="profile-background">
          <p>{{ DisplayUserDetails[4] }}</p>
        </div>
        <div>
          <h1 class="full-name">{{ DisplayUserDetails[0] }}</h1>
          <h2 class="email">{{ DisplayUserDetails[1] }}</h2>
        </div>
        <hr />
        <router-link to="/editProfile" class="dash-menu-options-label"
          >Edit Profile</router-link
        >
        <hr />
        <p class="dash-menu-options-label">Settings</p>
        <hr />
        <router-link
          @click="logout()"
          to="./login"
          class="dash-menu-options-label"
          >Logout</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    DisplayUserDetails() {
      return this.$store.getters["userDetails"];
    },
  },
  methods: {
    logout() {
      this.$store.commit("logoutAuthentication");
    },
  },
};
</script>

<style scoped>
.wrapper {
  z-index: 1;
  position: relative;
}
.dash-menu-options-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 321px;
  height: 368px;
  float: right;
  margin-right: 24px;

  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 12px 12px;
}
.dash-menu-options-wrapper {
  width: 273px;
  height: 320px;
  margin: 24px;
}
.profile-background {
  margin-left: 102px;
  background: #d90429;
  border-radius: 100px;
  width: 80px;
  height: 80px;
}
.profile-background p {
  display: block;
  text-align: center;
  padding-top: 20px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  flex-direction: row;
  align-content: stretch;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.dash-menu-options-wrapper h1 {
  width: 207px;
  height: 19px;
  margin-top: 24px;
  margin-bottom: 0px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #333333;
}
.dash-menu-options-wrapper h2 {
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin: 8px 0px 8px 0px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  color: #d90429;
}
hr {
  border: 1px solid #e0e0e0;
  margin: 16px 0px 16px 0px;
}
.dash-menu-options-label {
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1a1a1a;
}
</style>
