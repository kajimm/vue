import Vue from 'vue';
import ejemplo from './components/App.vue';


new Vue({
  render: h => h(ejemplo),
  components: {
    ejemplo
  }
}).$mount("#app");