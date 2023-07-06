import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
// Export the router instance
//test this out and make sure it works. check chatgpt for the other code that goes in the other vue file

