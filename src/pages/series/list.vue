<template>
  <view class="series-list">
    <view class="item" v-for="item of series" :key="item.id" @click="onItemClick(item)">
      <view class="info">
        <image class="image" :src="item.image" mode="aspectFill" />
        <view class="name">{{ item.name }}</view>
      </view>
      <u-icon name="arrow-right" color="#999" />
    </view>
  </view>
</template>

<script>
import Series from '@/models/Series'
import { mapActions } from 'vuex'

export default {
  name: 'series-list',
  computed: {
    series () {
      return this.brandId ? Series.query().where('brand_id', this.brandId).with('brand').get() : []
    }
  },
  data () {
    return {
      brandId: null
    }
  },
  onLoad (options) {
    const { brandId } = options
    if (!brandId) {
      uni.navigateBack()
      return
    }
    this.brandId = brandId
    Series.fetchByBrandId(brandId)
  },
  methods: {
    ...mapActions('current', ['setSeries']),
    check (item) {
      const pages = getCurrentPages()
      const from = pages.length >= 3 ? pages[pages.length - 3] : null
      if (from && from.$page.fullPath === '/pages/vehicle/add') {
        uni.navigateBack({ delta: 2 })
      } else {
        uni.navigateTo({ url: `/pages/series/view?id=${item.id}` })
      }
    },
    onItemClick (item) {
      this.setSeries(item)
      this.check(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.series-list {
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  padding: 30rpx;
  background-color: $white;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding: 20rpx 0;

    .info {
      display: flex;
      align-items: center;

      .image {
        width: 284rpx;
        height: 160rpx;
        border-radius: 14rpx;
      }

      .name {
        margin-left: 16rpx;
        font-size: 32rpx;
      }
    }
  }

  .item + .item {
    border-top: 1rpx solid $border-color-base;
  }
}
</style>
