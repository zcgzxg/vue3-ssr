<template>
  <Result title="抱歉，您访问的页面不存在" style="margin-top: 20vh">
    <template #icon>
      <img src="/public/404.png" />
    </template>
    <template #extra>
      <Button
        size="large"
        type="primary"
        @click="$router.replace({ name: 'Home' })"
        >返回首页</Button
      >
    </template>
  </Result>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { Result, Button } from 'ant-design-vue'

export default defineComponent({
  name: 'NotFoundPage',
  components: { Result, Button }
})
</script>
