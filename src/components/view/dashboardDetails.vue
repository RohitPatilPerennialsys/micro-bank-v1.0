<template>
  <div class="wrapper">
    <heading></heading>
    <div class="dash-title">Dashboard </div>
    <navbarDashboard></navbarDashboard>
    <transactionTable></transactionTable>
    <footerDashboard></footerDashboard>
  </div>
</template>

<script>
import heading from "../headerDashboard.vue";
import navbarDashboard from "../navbarDashboard.vue";
import transactionTable from "../transactionTable.vue";
import footerDashboard from "../footerDashboard.vue";
export default {
  components: { heading, navbarDashboard, transactionTable, footerDashboard },
};
</script>

<style>
.wrapper {
  background: #e5e5e5;
}
.dash-title {
  /* Dashboard */
  margin: 32px 217px 24px 12px;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
}
@media screen and (min-width: 1016px) {
  .dash-title {
    margin-left: 24px;
  }
}
</style>
