<template>
  <view class="clamp" :style="{ '-webkit-line-clamp': lines }">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'clamp',
  props: {
    lines: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.clamp {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
</style>
