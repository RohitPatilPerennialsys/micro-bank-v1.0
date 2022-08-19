<template>
  <heading></heading>
  <editProfileForm></editProfileForm>
  <footerDashboard></footerDashboard>
</template>

<script>
import heading from "../headerDashboard.vue";
import editProfileForm from "../editProfileForm.vue";
import footerDashboard from "../footerDashboard.vue";
export default {
  components: {
    heading,
    editProfileForm,
    footerDashboard,
  },
};
</script>

<style>
.dash-title {
  /* Dashboard */
  margin: 32px 217px 24px 12px;
  margin-left: 24px;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}
</style>
