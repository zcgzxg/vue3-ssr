<template>
  <Result title="抱歉，服务器出错了" style="margin-top: 20vh">
    <template #icon>
      <img src="/public/500.png">
    </template>
    <template #extra>
      <Button
        size="large"
        type="primary"
        @click="$router.replace({ name: 'Home' })"
      >
        返回首页
      </Button>
    </template>
  </Result>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { Result, Button } from 'ant-design-vue'

export default defineComponent({
  name: 'ErrorPage',
  components: { Result, Button }
})
</script>
