<template>
  <div class="signup-page-wrapper">
    <microBankPoster></microBankPoster>
    <createAccForm></createAccForm>
  </div>
</template>

<script>
import createAccForm from "../CreateAccForm.vue";
import microBankPoster from "../MicroBankPoster.vue";
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
