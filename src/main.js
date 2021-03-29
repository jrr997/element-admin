import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')