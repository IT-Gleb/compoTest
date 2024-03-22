import { createApp } from "vue";
import "./assets/css/styles.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { mainRouter } from "./router/mRouter";

const myPinia = createPinia();

createApp(App).use(mainRouter).use(myPinia).mount("#app");
