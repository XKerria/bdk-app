<template>
  <view class="firm-item">
    <view class="left">
      <image :src="firm.logo" mode="aspectFill" />
    </view>
    <u-icon name="arrow-right" color="#999" />
  </view>
</template>

<script>
export default {
  name: 'firm-item',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
