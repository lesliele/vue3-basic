import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
})
router.isReady().then(_ => {
  console.log('初始化完毕')
})
export default router
