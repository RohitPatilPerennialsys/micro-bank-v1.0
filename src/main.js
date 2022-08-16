import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import store from "./store/store";
import DashboardSummary from "./components/view/dashboardSummary.vue";
import DashboardDetails from "./components/view/dashboardDetails.vue";
import createAnAccount from "./components/view/createAnAccount.vue";
import LoginAcc from "./components/view/loginAcc.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/DashboardSummary", component: DashboardSummary },
    { path: "/DashboardDetails", component: DashboardDetails },
    { path: "/Signup", component: createAnAccount },
    { path: "/Login", component: LoginAcc },
  ],
});
createApp(App).use(router, store).mount("#app");
