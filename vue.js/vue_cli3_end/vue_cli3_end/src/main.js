import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/common.scss'
//import './assets/js/rem';
import zPreviewImage from '@/utils/zPreviewImage'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(zPreviewImage);

if (process.env.NODE_ENV !== 'production' && !process.env.VUE_APP_BACK_END_URL) {
  const Mock = require('./mock/index').default
  Mock.mockData()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
