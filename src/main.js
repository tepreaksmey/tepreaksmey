import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
import router from "../router";
import { createI18n } from "vue-i18n";
import EN from "./locale/en.json";
import KH from "./locale/kh.json";
import 'bootstrap/dist/css/bootstrap.min.css';
// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
});

const i18n = createI18n({
  locale: "EN",
  messages: {
    EN: EN,
    KH: KH,
  },
});
app.use(i18n);
app.use(router);
app.use(vuetify);
app.mount("#app");
