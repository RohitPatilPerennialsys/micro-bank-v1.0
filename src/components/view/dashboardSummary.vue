<template>
  <div class="wrapper">
    <heading></heading>
    <div class="dash-title">Dashboard</div>
    <Navbar></Navbar>
    <SummaryCard></SummaryCard>
    <div class="serviceMsg">
      <h1>Services</h1>
      <p>Micro bank services for you</p>
    </div>
    <CurrentServices></CurrentServices>
    <AvailableServices></AvailableServices>
    <Footer></Footer>
  </div>
</template>

<script>
import heading from "../headerDashboard.vue";
import Navbar from "../navbarDashboard.vue";
import SummaryCard from "../summaryCard.vue";
import CurrentServices from "../currentServices.vue";
import AvailableServices from "../availableServices.vue";
import Footer from "../footerDashboard.vue";

export default {
  components: {
    heading,
    Navbar,
    SummaryCard,
    CurrentServices,
    AvailableServices,
    Footer,
  },
};
</script>

<style>
.wrapper {
  margin: 0%;
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
.serviceMsg {
  display: flex;
}
.serviceMsg h1 {
  /* Services */
  font-weight: bold;
  font-size: 14px;
  margin: 32px 0px 0px 12px;
  line-height: 19px;
  display: flex;
  color: #1a1a1a;
}
.serviceMsg p {
  /* Micro bank services for you */
  padding-left: 8px;
  font-style: italic;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  color: #1a1a1a;
  margin-block-start: 0;
  margin-block-end: 0;
}
@media screen and (min-width: 1016px) {
  .dash-title {
    margin-left: 24px;
  }
  .serviceMsg h1 {
    font-weight: bold;
    font-size: 14px;
    margin-left: 24px;
  }
}
</style>
