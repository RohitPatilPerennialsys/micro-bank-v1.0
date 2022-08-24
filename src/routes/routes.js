import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import DashboardSummary from "../components/view/DashboardSummary.vue";
import DashboardDetails from "../components/view/DashboardDetails.vue";
import createAnAccount from "../components/view/SignIn.vue";
import LoginAcc from "../components/view/LoginAcc.vue";
import editProfile from "../components/view/EditProfile.vue";
import notFound from "../components/view/NotFoundPage.vue";

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

    {
      path: "/editProfile",
      component: editProfile,
      name: "editProfile",
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated == false) {
          next("/Login");
        } else {
          next();
        }
      },
    },
  ],
});
