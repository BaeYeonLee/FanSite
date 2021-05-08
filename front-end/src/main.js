import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import CKEditor from '@ckeditor/ckeditor5-vue';
import VCalendar from 'v-calendar';
import ApiService from "./api";

createApp(App).use(ApiService).use(store).use(VCalendar, {}).use(router).use( CKEditor ).mount("#app");
