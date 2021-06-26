<template>
  <div>登录页面</div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  getCurrentInstance
} from 'vue'
import {
  useRoute,
  onBeforeRouteLeave,
  START_LOCATION
} from 'vue-router'
export default defineComponent({
    setup() {
      let route = useRoute()
      const instance = getCurrentInstance()

      onMounted(() => {
        console.log(START_LOCATION)
        console.log(route.params)
        console.log(route.query)
        console.log(instance.appContext.config.globalProperties.$http)
      })
      onBeforeRouteLeave(() => {
        window.confirm('确定退出码')
      })
    }
})
  
</script>
<style lang="less">
     
</style>
