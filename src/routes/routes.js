import { createRouter, createWebHistory } from "vue-router";
import DashboardSummary from "../components/view/dashboardSummary.vue";
import DashboardDetails from "../components/view/dashboardDetails.vue";
import createAnAccount from "../components/view/createAnAccount.vue";
import LoginAcc from "../components/view/loginAcc.vue";
import editProfile from "../components/view/editProfile.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/DashboardSummary", component: DashboardSummary },
    { path: "/DashboardDetails", component: DashboardDetails },
    { path: "/Signup", component: createAnAccount },
    { path: "/Login", component: LoginAcc },
    { path: "/editProfile", component: editProfile },
  ],
});
