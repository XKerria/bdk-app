<template>
  <view class="firm-view">
    <view class="container">
      <image class="image" :src="firm.image" mode="aspectFill" />
      <view class="wrapper">
        <view class="name">
          <clamp>{{ firm.name }}</clamp>
        </view>
        <view class="brands">
          <text>主营车辆：</text>
          <tag class="tag" v-for="(brand, index) of firm.brands.slice(0, 3)" :key="index">
            {{ brand }}
          </tag>
        </view>
        <view class="remain">
          <text>今日余车：</text>
          <text class="num">{{ firm.remain }}</text>
        </view>
      </view>

      <u-gap height="200" />

      <view style="margin-left: 30rpx">
        <ui-title>现有车辆</ui-title>
      </view>

      <view class="vehicles">
        <view class="vehicle" v-for="item of vehicles" :key="item.id">
          <image class="vehicle-image" :src="item.series.image" mode="aspectFill" />
          <view class="vehicle-name">{{ item.series.name }}</view>
          <view class="vehicle-remain">余车：{{ item.remain }}</view>
        </view>
      </view>
    </view>

    <ui-button shape="square" @click="onCallClick">联系商家</ui-button>
  </view>
</template>

<script>
import { mapState } from 'vuex'
import Vehicle from '@/models/Vehicle'

export default {
  name: 'firm-view',
  computed: {
    ...mapState('current', ['firm']),
    vehicles () {
      return this.firm ? Vehicle.query().where('firm_id', this.firm.id).get() : []
    }
  },
  onLoad () {
    if (!this.firm) {
      uni.navigateBack()
      return
    }
    Vehicle.fetchByFirmId(this.firm.id)
  },
  methods: {
    onCallClick () {
      uni.makePhoneCall({
        phoneNumber: this.firm.phone
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.firm-view {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .container {
    flex: 1;
    position: relative;
    overflow-y: auto;

    .image {
      width: 100vw;
      height: 320rpx;
    }

    .wrapper {
      position: absolute;
      top: 220rpx;
      left: 30rpx;
      z-index: 99;
      width: 690rpx;
      height: 250rpx;

      background-color: $white;
      border-radius: 18rpx;
      box-shadow: $shadow;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 0 30rpx;

      .name {
        width: 100%;
        text-align: center;
        font-size: 36rpx;
      }

      .brands {
        margin-top: 28rpx;
        display: flex;
        align-items: center;
        .tag + .tag {
          margin-left: 16rpx;
        }
      }

      .remain {
        margin-top: 24rpx;
        font-size: 28rpx;
        .num {
          font-size: 36rpx;
          color: $primary-color;
          letter-spacing: 4rpx;
        }
      }
    }

    .vehicles {
      margin-top: 30rpx;
      display: grid;
      grid-template-columns: repeat(3, auto);
      column-gap: 60rpx;
      row-gap: 40rpx;
      padding: 40rpx 30rpx;
      background-color: $white;

      .vehicle {
        text-align: center;

        .vehicle-image {
          height: 120rpx;
          width: 190rpx;
        }
        .vehicle-name {
          margin-top: 4rpx;
          font-size: 22rpx;
        }
        .vehicle-remain {
          margin-top: 4rpx;
          font-size: 22rpx;
          color: $primary-color;
        }
      }
    }
  }
}
</style>
