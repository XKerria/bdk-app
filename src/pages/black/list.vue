<template>
  <view class="black-list">
    <view class="search">
      <ui-search v-model="search" placeholder="请输入关键字" />
    </view>

    <view class="container">
      <view class="item" v-for="item of list" :key="item.id" @click="onItemClick(item)">
        <view class="base">
          <view class="name">
            {{ item.name }}
          </view>
          <view class="phone">
            {{ item.phone }}
          </view>
        </view>
        <u-icon name="arrow-right" color="#e4e4e4" />
      </view>
    </view>

    <ui-button shape="square" @click="onAddClick">添加黑名单</ui-button>
  </view>
</template>

<script>
import Black from '@/models/Black'

export default {
  name: 'black-list',
  computed: {
    blacks: () => Black.all(),
    list () {
      return this.blacks.filter(i => i.name.indexOf(this.search) !== -1 || i.phone.indexOf(this.search) !== -1)
    }
  },
  data () {
    return {
      search: ''
    }
  },
  onShow () {
    Black.fetch()
  },
  methods: {
    onItemClick (item) {
      uni.navigateTo({ url: `/pages/black/view?id=${item.id}` })
    },
    onAddClick () {
      uni.navigateTo({ url: `/pages/black/add` })
    }
  }
}
</script>

<style lang="scss" scoped>
.black-list {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .search {
    padding: 30rpx;
  }

  .container {
    flex: 1;
    overflow-y: auto;
    background-color: $white;
    padding: 0 30rpx;

    .item {
      padding: 20rpx 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 28rpx;

      .base {
        display: flex;
        align-items: center;

        .name {
          width: 150rpx;
        }
      }
    }

    .item + .item {
      border-top: 1rpx solid $border-color-base;
    }
  }
}
</style>
