<template>
  <view class="firm-list">
    <view class="item" v-for="(item, index) of data" :key="index">
      <firm-item :item="item" @click="onItemClick" />
    </view>
  </view>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'firm-list',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions('current', ['setFirm']),
    onItemClick (firm) {
      this.setFirm(firm)
      uni.navigateTo({ url: '/pages/firm/view' })
    }
  }
}
</script>

<style lang="scss" scoped>
.firm-list {
  .item + .item {
    margin-top: 30rpx;
  }
}
</style>
