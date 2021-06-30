<template>
  <div class="series-view">
    <view class="series">
      <image class="image" :src="series.image" mode="aspectFill" />
      <view class="info">
        <view class="name">{{ series.name }}</view>
        <view class="nums">
          <text>{{ vehicles.length }} 家商户有车</text>
          <text>
            今日余车：
            <text class="num">{{ vehicles.map(i => i.$toJson()) | sum('remain') }}</text>
          </text>
        </view>
      </view>
    </view>

    <u-gap height="30" />

    <view class="firms" v-if="vehicles.length">
      <view class="item" v-for="(item, index) of vehicles" :key="index" @click="onFirmClick(item.firm)">
        <view class="firm">
          <image class="logo" :src="item.firm.logo" mode="aspectFill" />
          <view class="wrapper">
            <view class="firm-name">
              <clamp>{{ item.firm.name }}</clamp>
            </view>
            <view class="remain">
              <text>{{ series.name }}：</text>
              <text class="num">{{ item.remain }}</text>
            </view>
          </view>
        </view>
        <u-icon name="arrow-right" color="#e4e4e4" />
      </view>
    </view>
  </div>
</template>

<script>
import Series from '@/models/Series'
import Vehicle from '@/models/Vehicle'
import { mapActions } from 'vuex'

export default {
  name: 'series-view',
  computed: {
    series () {
      return this.id ? Series.find(this.id) : null
    },
    vehicles () {
      return this.id ? Vehicle.query().where('series_id', this.id).get() : []
    }
  },
  data () {
    return {
      id: null
    }
  },
  onLoad (options) {
    this.id = options.id
    if (!this.series) {
      Series.show(this.id).catch(() => {
        uni.navigateBack()
      })
    }
    Vehicle.fetchBySeriesId(this.id)
  },
  methods: {
    ...mapActions('current', ['setFirm']),
    onFirmClick (firm) {
      this.setFirm(firm)
      uni.navigateTo({ url: '/pages/firm/view' })
    }
  }
}
</script>

<style lang="scss" scoped>
.series-view {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .series {
    background-color: $white;
    box-shadow: $shadow;

    .image {
      width: 100vw;
      height: 320rpx;
    }

    .info {
      padding: 0 30rpx;
      background-color: $white;

      .name {
        padding: 20rpx 0;
        font-size: 42rpx;
        border-bottom: 1rpx solid $border-color-base;
      }

      .nums {
        padding: 20rpx 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 28rpx;
      }
    }
  }

  .firms {
    padding: 0 30rpx;
    background-color: $white;
    box-shadow: $shadow;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .firm {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 30rpx;

        .logo {
          width: 140rpx;
          height: 140rpx;
          border-radius: 6rpx;
        }

        .wrapper {
          flex: 1;
          padding-left: 33rpx;
          .firm-name {
            font-size: 32rpx;
          }

          .remain {
            margin-top: 12rpx;
            font-size: 28rpx;
          }
        }
      }
    }

    .item + .item {
      border-top: 1rpx solid $border-color-base;
    }
  }
}
.num {
  font-size: 36rpx;
  color: $primary-color;
  letter-spacing: 4rpx;
}
</style>
