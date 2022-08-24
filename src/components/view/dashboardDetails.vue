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
import heading from "../HeaderDashboard.vue";
import navbarDashboard from "../NavbarDashboard.vue";
import transactionTable from "../TransactionTable.vue";
import footerDashboard from "../FooterDashboard.vue";
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
