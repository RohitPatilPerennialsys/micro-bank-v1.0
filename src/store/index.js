import axios from "axios";
import routes from "@/routes/routes";
import { createStore } from "vuex";

const baseURL = " http://localhost:3000";
export default createStore({
  state: {
    authenticated: false,
    userID: null,
    userDetails: [],
    userCurrentService: [],
    userAvailableService: [],
  },
  getters: {
    userAuthenticated(state) {
      return state.authenticated;
    },
    userAllAvailableService(state) {
      return state.userAvailableService;
    },
    userAllCurrentServices(state) {
      return state.userCurrentService;
    },
    userDetails(state) {
      return state.userDetails;
    },
  },
  mutations: {
    signInMutation(state, signInuserInput) {
      state.signInuserInputResponse = signInuserInput;
    },
    logInMutation(state, userID) {
      state.userID = userID.id;
      state.userDetails.push(userID.name, userID.email);
      const userInitialLetter = userID.name
        .split(" ")
        .map((word) => word[0])
        .join("");
      state.userDetails.push(userID.name, userID.email, userInitialLetter);
      state.userCurrentService = userID.services;
      state.userAvailableService = userID.availableServices;
      state.authenticated = userID.authenticated;
      console.log(state);
    },
    logoutAuthentication(state) {
      state.authenticated = false;
    },
  },

  actions: {
    async signIn(context, signInuserInput) {
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
        const response = await axios.post(baseURL + `/users`, signInuserInput);
        const responseData = await response.data;
        console.log(responseData);
        context.commit("signInMutation", signInuserInput);
        routes.push("/login");
      }
    },
    async logIn(context, logInuserInput) {
      if (logInuserInput.email !== "" && logInuserInput.password !== "") {
        const response = await axios(baseURL + `/users`);
        const responseData = await response.data;
        console.log(responseData);
        for (let id in responseData) {
          if (
            responseData[id].email === logInuserInput.email &&
            responseData[id].password === logInuserInput.password
          ) {
            console.log("OK");
            console.log("Successfully Login");
            routes.replace({ name: "DashboardSummary" });
            var payload = responseData[id];
            payload.authenticated = true;
            context.commit("logInMutation", payload);
          }
        }
      } else {
        alert("Enter All Fields ");
      }
    },
  },
});
