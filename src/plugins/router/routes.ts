import { defineAsyncComponent } from 'vue'
const Layout = defineAsyncComponent(() => import('@/pages/layout/index.vue'))
const Login = defineAsyncComponent(() => import('@/pages/login/index.vue'))

const routes = [
  { path: '/', component: Layout },
  { path: '/login/:id', name: 'login', component: Login }
]
export default routes
