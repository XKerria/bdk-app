<template>
  <view class="carousel">
    <swiper
      class="swiper"
      :interval="5000"
      :autoplay="true"
      :circular="true"
      :indicator-dots="false"
      @change="onChange"
    >
      <swiper-item v-for="(item, index) in images" :key="index">
        <image class="swiper-image" mode="aspectFill" :src="item" />
      </swiper-item>
    </swiper>
    <view class="indicators">
      <view
        v-for="(item, index) in images"
        :key="index"
        class="indicator"
        :class="{ active: index === current }"
      ></view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    onChange (e) {
      const { current } = e.detail
      this.current = current
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100%;
  position: relative;

  .swiper {
    overflow: hidden;
    .swiper-image {
      width: 100%;
      height: 100%;
    }
  }

  .indicators {
    position: absolute;
    right: 20rpx;
    bottom: 30rpx;
    display: flex;
    justify-content: center;
    align-items: center;

    .indicator {
      box-sizing: border-box;
      width: 12rpx;
      height: 12rpx;
      border-radius: 6rpx;
      transition-property: all;
      transition-duration: 0.3s;
      background-color: rgba(255, 255, 255, 0.6);
    }

    .indicator + .indicator {
      margin-left: 10rpx;
    }

    .active {
      width: 48rpx;
      transition-property: all;
      transition-duration: 0.3s;
      background-color: $white;
    }
  }
}
</style>
