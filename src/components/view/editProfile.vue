<template>
  <heading></heading>
  <editProfileForm></editProfileForm>
  <footerDashboard></footerDashboard>
</template>

<script>
import heading from "../HeaderDashboard.vue";
import editProfileForm from "../EditProfileForm.vue";
import footerDashboard from "../FooterDashboard.vue";
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
