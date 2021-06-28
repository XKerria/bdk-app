<template>
  <view class="user">
    <view class="container">
      <view class="profile">
        <view class="avatar">
          <open-data type="userAvatarUrl" />
        </view>
        <view class="info">
          <view class="nickname">
            <open-data type="userNickName" />
          </view>
          <u-gap height="20" />
          <view class="status" v-if="user && firm">已入驻</view>
        </view>
      </view>

      <u-gap height="40" />

      <view v-if="user" class="wrapper">
        <view v-if="firm" class="firm">
          <view class="adjust">
            <text decode>&nbsp;</text>
            <text>调整</text>
            <u-icon name="arrow-right" />
          </view>
          <view class="nums">
            <view class="num">
              <text>在租车辆</text>
              <u-gap height="14" />
              <text>{{ firm.remain }} 辆</text>
            </view>
            <view class="divider"></view>
            <view class="num">
              <text>今日已租</text>
              <u-gap height="14" />
              <text>{{ firm.remain }} 辆</text>
            </view>
          </view>
        </view>

        <u-gap height="40" />

        <view v-if="firm" class="actions">
          <view class="action">
            <view class="action-inner">
              <image class="icon" src="/static/icons/vehicle.png" />
              <text class="text">我的车辆</text>
            </view>
            <u-icon name="arrow-right" color="#e4e4e4" />
          </view>
          <view class="action">
            <view class="action-inner">
              <image class="icon" src="/static/icons/firm.png" />
              <text class="text">公司信息</text>
            </view>
            <u-icon name="arrow-right" color="#e4e4e4" />
          </view>
          <view class="action">
            <view class="action-inner">
              <image class="icon" src="/static/icons/service.png" />
              <text class="text">联系客服</text>
            </view>
            <u-icon name="arrow-right" color="#e4e4e4" />
          </view>
        </view>
      </view>

      <ui-button v-else @click="onAuthClick">点击登录</ui-button>
    </view>

    <page-footer />
  </view>
</template>

<script>
import User from '@/models/User'
import Firm from '@/models/Firm'

export default {
  name: 'user',
  computed: {
    user () {
      return User.current()
    },
    firm () {
      return this.user ? Firm.find(this.user.firm_id) : null
    }
  },
  onLoad () {
    console.log(this.user)
  },
  methods: {
    onAuthClick () {
      uni.navigateTo({ url: '/pages/login/login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .container {
    flex: 1;
    padding: 40rpx;
    overflow-y: auto;

    .profile {
      display: flex;
      align-items: center;

      .avatar {
        height: 128rpx;
        width: 128rpx;
        border-radius: 50%;
        box-shadow: 0 0 14rpx 0 rgba(0, 0, 0, 0.16);
        overflow: hidden;
      }

      .info {
        margin-left: 50rpx;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .nickname {
          font-size: 32rpx;
        }

        .status {
          width: 108rpx;
          height: 36rpx;
          border-radius: 18rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 0, 0, 0.1);
          font-size: 24rpx;
          color: $primary-color;
        }
      }
    }

    .wrapper {
      .firm {
        padding: 0 30rpx;
        border-radius: 18rpx;
        background-color: $primary-color;
        color: $white;
        box-shadow: 0 0 14rpx 0 rgba(0, 0, 0, 0.1);

        .adjust {
          padding: 20rpx 0;
          border-bottom: 1rpx solid rgba(255, 255, 255, 0.2);
          font-size: 32rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nums {
          padding-top: 20rpx;
          padding-bottom: 28rpx;
          padding-left: 50rpx;
          padding-right: 50rpx;
          display: flex;
          align-items: center;
          justify-content: space-around;
          .num {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .divider {
            width: 1rpx;
            height: 58rpx;
            background-color: rgba(255, 255, 255, 0.2);
          }
        }
      }

      .actions {
        padding: 0 30rpx;
        background-color: $white;
        border-radius: 18rpx;
        box-shadow: 0 0 14rpx 0 rgba(0, 0, 0, 0.1);

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
              object-position: center;
              object-fit: contain;
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
    }
  }
}
</style>
