import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import "../public/css/materialdesignicons.min.css";
import 'swiper/swiper-bundle.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue } from 'bootstrap-vue'
var VueScrollTo = require('vue-scrollto');
import Scrollspy from 'vue2-scrollspy';
import VueYoutube from 'vue-youtube';
import vueVimeoPlayer from 'vue-vimeo-player';
import VueMasonry from 'vue-masonry-css';
import VueMeta from 'vue-meta'


import VueCalendly from 'vue-calendly';

// https://github.com/MatteoGabriele/vue-analytics/blob/master/docs/installation.md
import VueAnalytics from 'vue-analytics';


Vue.use(VueScrollTo, {
  duration: 500,
  easing: "ease"
})

Vue.use(BootstrapVue)
Vue.use(Scrollspy);
Vue.use(VueYoutube)
Vue.use(vueVimeoPlayer)
Vue.use(VueMasonry)
Vue.use(VueCalendly)
Vue.use(VueMeta)

// https://webdeasy.de/en/vue-analytics-en/
// google analytics id
// tracking id: UA-186409727-1
Vue.use(VueAnalytics, {
  id: 'UA-186409727-1',
  router
})

// https://github.com/mib200/vue-gtm
import VueGtm from 'vue-gtm';

Vue.use(VueGtm, {
  id: 'GTM-PJ6M63D', // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
  // queryParams: { // Add url query string when load gtm.js with GTM ID (optional)
  //   gtm_auth:'AB7cDEf3GHIjkl-MnOP8qr',
  //   gtm_preview:'env-4',
  //   gtm_cookies_win:'x'
  // },
  defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  // ignoredViews: ['homepage'], // Don't trigger events for specified router names (case insensitive) (optional)
  // trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
