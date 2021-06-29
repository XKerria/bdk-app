<template>
  <view class="vehicles">
    <view v-if="vehicles.length" class="container">
      <view class="vehicle" v-for="item of vehicles" :key="item.id">
        <vehicle-item :vehicle="item" @click="onVehicleClick(item)" />
      </view>
    </view>
    <view class="loading" v-else>
      <u-loading mode="circle" color="#ff1c3d" size="72" />
      <u-gap height="20" />
      <text class="tip">正在加载...</text>
    </view>
    <ui-button shape="square" @click="onAddClick">添加车辆</ui-button>
    <u-toast ref="toast" />
  </view>
</template>

<script>
import Vehicle from '@/models/Vehicle'
import VehicleItem from './components/vehicle-item.vue'

export default {
  name: 'vehicles',
  components: { VehicleItem },
  computed: {
    vehicles () {
      return this.firmId ? Vehicle.query().where('firm_id', this.firmId).get() : []
    }
  },
  data () {
    return {
      firmId: null
    }
  },
  onLoad (options) {
    this.firmId = options.firmId
    if (this.firmId) Vehicle.fetchByFirmId(this.firmId)
  },
  methods: {
    onVehicleClick (vehicle) {
      uni.navigateTo({ url: `/pages/vehicle/edit?id=${vehicle.id}` })
    },
    onAddClick () {
      uni.navigateTo({ url: `/pages/vehicle/add` })
    }
  }
}
</script>

<style lang="scss" scoped>
.vehicles {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .container {
    flex: 1;
    padding: 40rpx 30rpx;
    overflow-y: auto;

    .vehicle + .vehicle {
      margin-top: 30rpx;
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
