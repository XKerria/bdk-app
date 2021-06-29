<template>
  <view class="firm-list">
    <view class="item" v-for="(item, index) of data" :key="index">
      <firm-item :item="item" />
    </view>
  </view>
</template>

<script>
import FirmItem from './firm-item'
export default {
  name: 'firm-list',
  components: { FirmItem },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.firm-list {
  .item {
    background-color: #fff;
    border-radius: 18rpx;
    box-shadow: 0 0 14rpx 0 rgba(0, 0, 0, 0.1);
  }
  .item + .item {
    margin-top: 30rpx;
  }
}
</style>
