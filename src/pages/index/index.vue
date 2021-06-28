<template>
  <view class="index">
    <view class="container">
      <search placeholder="搜索您想要的车型" />

      <u-gap height="40" />
      <carousel class="carousel" :images="banners.map(i => i.image)" />

      <u-gap height="50" />
      <section-title>租赁公司</section-title>

      <u-gap height="30" />
      <firm-list :data="firms.slice(0, 2)" />

      <u-gap height="50" />
      <section-title>为您推荐</section-title>

      <u-gap height="30" />
      <view class="cards">
        <btn-vehicle />
        <btn-blacklist />
      </view>
    </view>

    <page-footer />
  </view>
</template>

<script>
import Banner from '@/models/Banner'
import Firm from '@/models/Firm'
import FirmList from './firm-list'
import BtnVehicle from './btn-vehicle'
import BtnBlacklist from './btn-blacklist'

export default {
  components: { FirmList, BtnVehicle, BtnBlacklist },
  computed: {
    banners: () => Banner.all(),
    firms: () => Firm.all()
  },
  data () {
    return {
      title: 'Hello'
    }
  },
  onLoad () {
    Banner.fetch()
    Firm.fetch()
  }
}
</script>

<style lang="scss">
.index {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .container {
    flex: 1;
    overflow-y: auto;
    padding: 30rpx;

    .search {
      box-shadow: 0 0 14rpx 0 rgba(0, 0, 0, 0.1);
      border-radius: 34rpx;
    }

    .carousel {
      box-sizing: border-box;
      width: 100%;
      height: 300rpx;
      border-radius: 18rpx;
      overflow: hidden;
      box-shadow: 0 0 14rpx 0 rgba(0, 0, 0, 0.16);
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(2, auto);
      column-gap: 30rpx;
    }
  }
}
</style>
