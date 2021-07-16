<template>
  <Pagination :total="200" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { Pagination } from 'ant-design-vue'

export default defineComponent({
  name: 'Index',
  components: { Pagination }
})
</script>
