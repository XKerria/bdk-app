<template>
  <view class="firm-edit">
    <u-form :model="form" ref="form" :label-style="labelStyle" label-width="150">
      <view @click="onLogoPick">
        <u-form-item label="LOGO" right-icon="arrow-right">
          <image v-if="form.logo" class="logo" :src="form.logo" mode="aspectFill" />
        </u-form-item>
      </view>
      <view @click="onImagePick">
        <u-form-item label="门头照片" prop="image" right-icon="arrow-right">
          <image v-if="form.image" class="image" :src="form.image" mode="aspectFill" />
        </u-form-item>
      </view>
      <u-form-item label="公司名称" prop="name">
        <u-input v-model="form.name" placeholder="公司名称" />
      </u-form-item>
      <u-form-item label="联系电话" prop="phone">
        <u-input v-model="form.phone" placeholder="联系电话" />
      </u-form-item>
      <u-form-item label="公司地址" prop="address">
        <u-input v-model="form.address" placeholder="公司地址" />
      </u-form-item>
    </u-form>
    <u-gap height="80" />
    <ui-button @click="$u.throttle(submit, 2000)">提交</ui-button>
    <!-- <view>{{ error }}</view> -->
    <u-toast ref="toast" />
  </view>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Firm from '@/models/Firm'
import cloud from '@/libs/Cloud'
import { chooseImage } from '@/utils/promize'

const rules = {
  name: [
    { required: true, message: '必填' },
    { min: 1, max: 64, message: '长度为 1 ~ 64 位' }
  ],
  phone: [
    { required: true, message: '必填' },
    { min: 1, max: 64, message: '长度为 1 ~ 64 位' }
  ],
  address: [
    { required: true, message: '必填' },
    { min: 1, max: 255, message: '长度为 1 ~ 255 位' }
  ]
}

export default {
  name: 'firm-edit',
  computed: {
    ...mapState('auth', ['firm']),
    firmObj () {
      return this.firm ? Firm.find(this.firm.id) : null
    }
  },
  data () {
    return {
      form: {},
      labelStyle: {
        fontSize: '28rpx',
        color: '#999',
        width: '150rpx'
      },
      error: ''
    }
  },
  onLoad () {
    if (!this.firm) uni.navigateBack()
    this.form = { ...this.firm }
  },
  onReady () {
    this.$refs.form.setRules(rules)
  },
  methods: {
    ...mapActions('auth', ['setFirm']),
    onLogoPick () {
      chooseImage().then(({ tempFilePaths }) => {
        return cloud.upload(tempFilePaths[0])
      }).then(url => {
        this.form.logo = url
      }).catch((e) => {
        this.error = JSON.stringify(e)
        this.$refs.toast.show({ title: '上传失败', type: 'error' })
      })
    },
    onImagePick () {
      chooseImage().then(({ tempFilePaths }) => {
        return cloud.upload(tempFilePaths[0])
      }).then(url => {
        this.form.image = url
      }).catch(() => {
        this.$refs.toast.show({ title: '上传失败', type: 'error' })
      })
    },
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          Firm.update(this.form.id, this.form).then(() => {
            this.setFirm(this.firmObj)
            this.$refs.toast.show({ title: '编辑成功', type: 'success', back: true })
          })
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.firm-edit {
  height: 100vh;
  width: 100vw;
  background-color: $white;
  padding: 30rpx;

  .logo {
    width: 100rpx;
    height: 100rpx;
  }
  .image {
    width: 320rpx;
    height: 180rpx;
  }
}
</style>
