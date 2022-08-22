import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import DashboardSummary from "../components/view/dashboardSummary.vue";
import DashboardDetails from "../components/view/dashboardDetails.vue";
import createAnAccount from "../components/view/createAnAccount.vue";
import LoginAcc from "../components/view/loginAcc.vue";
// import editProfile from "../components/view/editProfile.vue";
import notFound from "../components/view/notFoundPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: { name: "login" } },
    { path: "/Login", component: LoginAcc, name: "login" },
    { path: "/Signup", component: createAnAccount },
    {
      path: "/DashboardSummary",
      component: DashboardSummary,
      name: "DashboardSummary",
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated == false) {
          next("/Login");
        } else {
          next();
        }
      },
    },
    {
      path: "/DashboardDetails",
      name: "DashboardDetails",
      component: DashboardDetails,
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated == false) {
          next("/Login");
        } else {
          next();
        }
      },
    },
    { path: "/:NotFound(.*)*", component: notFound },
    // ,
    // {
    //   path: "/editProfile",
    //   component: editProfile,
    //   name: "editProfile",
    //   beforeEnter: (to, from, next) => {
    //     if (store.state.authenticated == false) {
    //       next("/Login");
    //     } else {
    //       next();
    //     }
    //   },
    // },
  ],
});
