<template>
  <div class="signup-page-wrapper">
    <microBankPoster></microBankPoster>
    <createAccForm></createAccForm>
  </div>
</template>

<script>
import createAccForm from "../createAccForm.vue";
import microBankPoster from "../microBankPoster.vue";
export default {
  components: {
    createAccForm,
    microBankPoster,
  },
  
};
</script>

<style>
.signup-page-wrapper {
    background: #ffffff;
  display: flex;
  justify-content: center;
}
</style>
