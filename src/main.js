import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css"; // tailwind
import { HiTicket } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import "remixicon/fonts/remixicon.css";

addIcons(HiTicket);

const app = createApp(App);
app.component("v-icon", OhVueIcon);

app.use(router).mount("#app");
