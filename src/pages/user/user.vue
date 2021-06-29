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

      <view v-if="user">
        <firm-info v-if="firm" :firm="firm" />
        <u-gap height="40" />
        <actions v-if="firm" />
      </view>

      <ui-button v-else @click="onAuthClick">点击登录</ui-button>
    </view>

    <page-footer />
  </view>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Firm from '@/models/Firm'
import Actions from './components/actions.vue'
import FirmInfo from './components/firm-info.vue'

export default {
  name: 'user',
  components: { Actions, FirmInfo },
  computed: {
    ...mapState('current', ['user', 'firm'])
  },
  onShow () {
    if (this.user && !this.firm) {
      const firm = Firm.find(this.user.firm_id)
      this.setFirm(firm)
    }
  },
  methods: {
    ...mapActions('current', ['setFirm']),
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
  }
}
</style>
