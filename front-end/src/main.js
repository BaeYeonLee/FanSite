import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApiService from "./api";

createApp(App).use(ApiService).use(store).use(router).mount("#app");
