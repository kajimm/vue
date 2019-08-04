import Vue from "vue";
import App from "./components/App.vue";
import example from "./components/ejemplo.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: {
    App,
    example
  }
});