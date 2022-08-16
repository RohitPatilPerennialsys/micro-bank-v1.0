<template>
  <div class="login-page-wrapper">
    <microBankPoster></microBankPoster>
    <loginform></loginform>
  </div>
</template>

<script>
import microBankPoster from "../microBankPoster.vue";
import loginform from "../loginForm.vue";
export default {
  components: {
    microBankPoster,
    loginform,
  },
};
</script>

<style>
.login-page-wrapper {
  display: flex;
  justify-content: center;
}
</style>
