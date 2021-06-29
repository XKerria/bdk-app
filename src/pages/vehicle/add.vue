<template>
  <view class="vehicle-add">
    <view class="container">
      <view class="view" v-if="series">
        <image class="image" :src="series.image" mode="aspectFill" />
      </view>

      <view class="form">
        <u-form :model="form" ref="form">
          <u-form-item label="车辆" prop="amount">
            <u-field
              :value="form.brand && form.series && `${form.brand.name} ${form.series.name}`"
              :border-bottom="false"
              right-icon="arrow-right"
              :clearable="false"
              @click="onBrandClick"
            />
          </u-form-item>
          <u-form-item label="总数" prop="amount">
            <u-number-box slot="right" v-model="form.amount" :min="form.remain" :max="99999" />
          </u-form-item>
          <u-form-item label="剩余" prop="remain">
            <u-number-box slot="right" v-model="form.remain" :min="0" :max="form.amount" />
          </u-form-item>
        </u-form>
      </view>

      <u-gap height="50" />

      <ui-button shape="square" @click="$u.throttle(submit, 2000)">提交</ui-button>

      <u-toast ref="toast" />
    </view>
  </view>
</template>

<script>
import Vehicle from '@/models/Vehicle'
import { mapState } from 'vuex'

export default {
  name: 'vehicle-add',
  computed: {
    ...mapState('current', ['user', 'brand', 'series']),
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
      form: {
        firm_id: null,
        brand: null,
        series: null,
        brand_id: null,
        series_id: null,
        amount: 0,
        remain: 0
      }
    }
  },
  onReady () {
    this.$refs.form.setRules(this.rules)
  },
  onLoad (options) {
    this.id = options.id
  },
  onShow () {
    this.form.brand = this.brand
    this.form.brand_id = this.brand ? this.brand.id : null
    this.form.series = this.series
    this.form.series_id = this.series ? this.series.id : null
    this.form.firm_id = this.user.firm_id
  },
  methods: {
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          Vehicle.create(this.form).then(() => {
            this.$refs.toast.show({ title: '添加成功', type: 'success', back: true })
          })
        }
      })
    },
    onBrandClick () {
      uni.navigateTo({ url: '/pages/brands/brands' })
    }
  }
}
</script>

<style lang="scss" scoped>
.vehicle-add {
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
