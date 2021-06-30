<template>
  <view class="firm-list">
    <view class="item" v-for="item of firms" :key="item.id">
      <firm-item :item="item" @click="onItemClick" />
    </view>
  </view>
</template>

<script>
import Firm from '@/models/Firm'
import { mapActions } from 'vuex'

export default {
  name: 'firm-list',
  computed: {
    firms: () => Firm.all()
  },
  onLoad () {
    Firm.fetch()
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
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 30rpx;

  .item + .item {
    margin-top: 30rpx;
  }
}
</style>
