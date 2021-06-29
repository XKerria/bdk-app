<template>
  <view class="vehicle-edit">
    <view class="container" v-if="vehicle">
      <view class="view">
        <image class="image" :src="vehicle && vehicle.series.image" mode="aspectFill" />
        <view class="name">{{ vehicle && vehicle.series.name }}</view>
      </view>

      <view class="form">
        <u-form :model="form" ref="form">
          <u-form-item label="总数" prop="amount">
            <u-number-box slot="right" v-model="form.amount" :min="form.remain" :max="99999" />
          </u-form-item>
          <u-form-item label="剩余" prop="remain">
            <u-number-box slot="right" v-model="form.remain" :min="0" :max="form.amount" />
          </u-form-item>
        </u-form>
      </view>

      <u-gap height="50" />

      <ui-button shape="square" @click="submit">提交</ui-button>
    </view>

    <view class="loading" v-else>
      <u-loading mode="circle" color="#ff1c3d" size="72" />
      <u-gap height="20" />
      <text class="tip">正在加载...</text>
    </view>
  </view>
</template>

<script>
import Vehicle from '@/models/Vehicle'

export default {
  name: 'vehicle-edit',
  computed: {
    rules () {
      return {
        amount: [
          { required: true, message: '必填' },
          { type: 'number', message: '必须为数值' }
        ],
        remain: [
          { required: true, message: '必填' },
          { type: 'number', message: '必须为数值' }
        ]
      }
    }
  },
  data () {
    return {
      id: null,
      vehicle: null,
      form: {}
    }
  },
  onReady () {
    this.$refs.form.setRules(this.rules)
  },
  onLoad (options) {
    this.id = options.id
    this.vehicle = Vehicle.find(this.id)
    this.form = this.vehicle.$toJson()
  },
  methods: {
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          Vehicle.update(this.id, this.form).then(() => {
            uni.navigateBack()
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.vehicle-edit {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: $white;

  .container {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: $white;

    .view {
      .image {
        width: 100vw;
        height: 360rpx;
      }

      .name {
        font-size: 42rpx;
        color: $text-color-base;
        padding: 10rpx 30rpx;
      }
    }

    .form {
      flex: 1;
      overflow-y: auto;
      text-align: center;
      background-color: $white;
      padding: 40rpx 30rpx;
    }
  }

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
}
</style>
