import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      availableServices: [],
      test:12
    };
  },
  getters: {
    allavailableServices(state) {
      return state.availableServices;
    },
  },
  mutations: {
    getAllservice(state, payload) {
      state.availableServices = payload;
    },

  },
  actions: {
    async getUsers(context) {
      let availableServices = [];
      const response = await fetch("http://localhost:3000/services");
      const responseData = await response.json();
      console.log(responseData);
      context.commit("getAllservice", availableServices);
    },
  },
});
