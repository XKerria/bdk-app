<template>
  <view class="brands">
    <view v-if="brands.length">
      <u-index-list :scrollTop="scrollTop" :active-color="color">
        <view v-for="(letter, index) in letters" :key="index">
          <u-index-anchor :index="letter" :custom-style="{ color }" />
          <view
            class="item"
            v-for="brand of brands.filter(i => i.letter === letter)"
            :key="brand.id"
            @click="onBrandClick(brand)"
          >
            <image class="logo" :src="brand.logo" mode="aspectFill" />
            <text class="name">{{ brand.name }}</text>
          </view>
        </view>
      </u-index-list>
    </view>

    <view class="loading" v-else>
      <u-loading mode="circle" :color="color" size="72" />
      <u-gap height="20" />
      <text class="tip">正在加载...</text>
    </view>
  </view>
</template>

<script>
import Brand from '@/models/Brand'
import { mapActions } from 'vuex'

export default {
  name: 'brands',
  computed: {
    brands: () => Brand.all()
  },
  data () {
    return {
      color: '#ff1c3d',
      scrollTop: 0,
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  },

  onLoad () {
    Brand.fetch()
  },

  onPageScroll (e) {
    this.scrollTop = e.scrollTop;
  },
  methods: {
    ...mapActions('current', ['setBrand']),
    onBrandClick (brand) {
      this.setBrand(brand)
      uni.navigateTo({ url: `/pages/series/series?brandId=${brand.id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $text-color-placeholder;
  font-size: 28rpx;
}
.title {
  font-size: 32rpx;
  color: $text-color-base;
  padding: 30rpx;
  background-color: $white;
}
.item {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  padding: 20rpx 30rpx;
  overflow: hidden;
  color: $text-color-base;
  font-size: 28rpx;
  background-color: $white;

  .logo {
    height: 68rpx;
    width: 68rpx;
  }

  .name {
    margin-left: 30rpx;
  }
}
.item + .item {
  border-top: 1rpx solid #f7f7f7;
}
</style>
