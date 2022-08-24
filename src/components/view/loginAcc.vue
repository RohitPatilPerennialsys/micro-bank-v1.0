<template>
  <div class="login-page-wrapper">
    <microBankPoster> </microBankPoster>
    <loginform></loginform>
  </div>
</template>

<script>
import microBankPoster from "../MicroBankPoster.vue";
import loginform from "../LoginForm.vue";
export default {
  components: {
    microBankPoster,
    loginform,
  },
};
</script>

<style>
.login-page-wrapper {
  background: #ffffff;
  display: flex;
  justify-content: center;
}
</style>
