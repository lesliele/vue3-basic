import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './plugins/router/index';
import Axios from 'axios'

var app = createApp(App)
app.config.globalProperties.$http = Axios
app.use(Antd)
app.use(router)
app.mount('#app')
