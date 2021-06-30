<template>
  <view class="actions">
    <view class="action" @click="onVehicleClick">
      <view class="action-inner">
        <image class="icon" src="/static/icons/vehicle.png" mode="aspectFit" />
        <text class="text">我的车辆</text>
      </view>
      <u-icon name="arrow-right" color="#e4e4e4" />
    </view>
    <view class="action" @click="onFirmEditClick">
      <view class="action-inner">
        <image class="icon" src="/static/icons/firm.png" mode="aspectFit" />
        <text class="text">公司信息</text>
      </view>
      <u-icon name="arrow-right" color="#e4e4e4" />
    </view>
    <view class="action">
      <view class="action-inner">
        <image class="icon" src="/static/icons/service.png" mode="aspectFit" />
        <text class="text">联系客服</text>
      </view>
      <u-icon name="arrow-right" color="#e4e4e4" />
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'actions',
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    onVehicleClick () {
      if (!this.user.firm_id) return
      uni.navigateTo({ url: `/pages/vehicles/vehicles?firmId=${this.user.firm_id}` })
    },
    onFirmEditClick () {
      uni.navigateTo({ url: `/pages/firm/edit` })
    }
  }
}
</script>

<style lang="scss" scoped>
.actions {
  padding: 0 30rpx;
  background-color: $white;
  border-radius: 18rpx;
  box-shadow: $shadow;

  .action {
    padding: 30rpx 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28rpx;
    color: $text-color-base;

    .action-inner {
      display: flex;
      align-items: center;

      .icon {
        height: 36rpx;
        width: 36rpx;
      }

      .text {
        margin-left: 20rpx;
      }
    }
  }

  .action + .action {
    border-top: 1rpx solid $border-color-base;
  }
}
</style>
