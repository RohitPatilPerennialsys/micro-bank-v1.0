import axios from "axios";
import routes from "@/routes/routes";
import { createStore } from "vuex";

const baseURL = " http://localhost:3000";
export default createStore({
  state() {
    return {
      userID: null,
      signInuserInputResponse: {},
      logInuserInputResponse: {},
      availableService: [],
      userCurrentService: [],
      userAvailableService: [],
    };
  },
  getters: {
    allAvailableService(state) {
      return state.availableService;
    },
    userAllCurrentServices(state) {
      return state.userCurrentService;
    },
  },
  mutations: {
    signInMutation(state, signInuserInput) {
      state.signInuserInputResponse = signInuserInput;
    },
    logInMutation(state, userID) {
      state.userID = userID;
    },
    getAllAvailableservice(state, responseData) {
      state.availableService = responseData;
    },
    getUserCurrentService(state, responseData) {
      state.userCurrentService = responseData;
    },
  },

  actions: {
    signIn(context, signInuserInput) {
      if (
        signInuserInput.name === "" ||
        signInuserInput.email === "" ||
        signInuserInput.date === "" ||
        signInuserInput.password === "" ||
        signInuserInput.password !== signInuserInput.confirmPwd
      ) {
        alert("Enter All Fields ");
      } else {
        console.log(signInuserInput);
        const response = axios.post(baseURL + `/users`, signInuserInput);
        const responseData = response.data;
        console.log(responseData);
        context.commit("signInMutation", signInuserInput);
        routes.push("/login");
      }
    },
    async logIn(context, logInuserInput) {
      if (logInuserInput.email !== "" && logInuserInput.password !== "") {
        const response = await fetch(baseURL + `/users`);
        const responseData = await response.json();
        console.log(responseData);
        for (let id in responseData) {
          if (
            responseData[id].email === logInuserInput.email &&
            responseData[id].password === logInuserInput.password
          ) {
            console.log("OK");
            console.log("Successfully Login");
            routes.push("/DashboardSummary");
            context.commit("logInMutation", responseData[id].id);
          }
        }
      } else {
        alert("Enter All Fields ");
      }

      console.log(this.state);
    },
    async allAvailableService(context) {
      const response = await axios.get(baseURL + `/services`);
      const responseData = await response.data;
      var allAvailableService = responseData;
      context.commit("getAllAvailableservice", allAvailableService);
    },
    async getUserCurrentServices(context) {
      const response = await axios(baseURL + `/users`);
      const responseData = await response.data[this.state.userID].services;
      console.log(this.state.availableService[0]);
      context.commit("getUserCurrentService", responseData);
    },
  },
});
// for (let i = 0; i < this.state.availableService.length; i++) {
//   for (let j = 0; j < this.state.userCurrentService.length; j++) {
//     if (
//       this.state.availableService.name[i] ==
//       this.state.userCurrentService.name[j]
//     ) {
//       userAvailableService.name.splice(i, 1);
//     }
//   }
// }
