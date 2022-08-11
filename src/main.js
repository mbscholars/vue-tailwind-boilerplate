import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './index.css' 
import VueProgressBar from "@aacassandra/vue3-progressbar";

const options = {
    color: "#bffaf3",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
      speed: "0.2s",
      opacity: "0.6s",
      termination: 300,
    },
    autoRevert: true,
    location: "left",
    inverse: false,
  };
  
createApp(App).use(store)
.use(VueProgressBar, options).use(router).mount("#app");
