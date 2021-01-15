/* eslint-disable */
require("bootstrap-vue");
import Vue from "vue";
import VueRouter from "vue-router";
import VueLazyLoad from 'vue-lazyload'
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";
import MyResume from "./custom-pages/MyResume.vue"

// Resume Store
import resumeStore from './custom-pages/javascript/store/store';
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    }
    return { x: 0, y: 0 };
  }
});

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(VueLazyLoad);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(MyResume)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store: resumeStore,
  data: {
    Chartist: Chartist
  }
});
