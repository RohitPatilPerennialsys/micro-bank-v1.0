import { createApp } from "vue";
import routes from "./routes/routes";
import App from "./App.vue";
import store from "./store";

const app=createApp(App).use(store);
app.use(routes);
app.mount("#app");
