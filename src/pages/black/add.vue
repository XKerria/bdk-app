<template>
  <view class="black-add">
    <u-form :model="form" ref="form">
      <u-form-item label="姓名" prop="name">
        <u-input v-model="form.name" placeholder="姓名" maxlength="10" />
      </u-form-item>
      <u-form-item label="电话" prop="phone">
        <u-input v-model="form.phone" placeholder="电话" maxlength="11" />
      </u-form-item>
      <u-form-item label="电话" prop="description">
        <u-input type="textarea" height="300" v-model="form.description" maxlength="65536" placeholder="情况描述..." />
      </u-form-item>
    </u-form>

    <u-gap height="50" />

    <ui-button @click="$u.throttle(submit, 3000)">提交</ui-button>

    <u-toast ref="toast" />
  </view>
</template>

<script>
import Black from '@/models/Black'

const rules = {
  name: [
    { required: true, message: '必填' }
  ],
  phone: [
    { required: true, message: '必填', trigger: 'blur' },
    { pattern: /^1[3-9][0-9]{9}$/, message: '请输入正确的手机号' }
  ],
  description: [
    { required: true, message: '必填' }
  ]
}

export default {
  name: 'black-add',
  data () {
    return {
      form: {
        name: '',
        phone: '',
        description: ''
      }
    }
  },
  onReady () {
    this.$refs.form.setRules(rules)
  },
  methods: {
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          Black.create(this.form).then(() => {
            this.$refs.toast.show({ title: '添加成功', type: 'success', back: true })
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.black-add {
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  background-color: $white;
  padding: 30rpx;
}
</style>
