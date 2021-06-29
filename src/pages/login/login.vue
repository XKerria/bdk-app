<template>
  <view class="login">
    <view class="container">
      <u-form ref="form" label-width="150" :model="form" :label-style="{ fontSize: '28rpx' }" :error-type="['message']">
        <u-form-item label="手机号" prop="phone">
          <u-input v-model="form.phone" />
        </u-form-item>
        <u-form-item label="密码" prop="password">
          <u-input v-model="form.password" type="password" password-icon />
        </u-form-item>
      </u-form>
    </view>

    <ui-button shape="square" @click="$u.throttle(login, 2000)">登录</ui-button>

    <u-toast ref="toast" />
  </view>
</template>

<script>
import { mapActions } from 'vuex'
import User from '@/models/User'

export default {
  name: 'login',
  data () {
    return {
      form: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [
          { required: true, message: '必填', trigger: 'blur' },
          { pattern: /^1[3-9][0-9]{9}$/, message: '请输入正确的手机号' }
        ],
        password: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 6, max: 32, message: '长度为 6 ~ 32 字符' }
        ]
      }
    }
  },
  onReady () {
    this.$refs.form.setRules(this.rules);
  },
  methods: {
    ...mapActions('current', ['setUser']),
    login () {
      this.$refs.form.validate(valid => {
        if (valid) {
          User.login(this.form).then((res) => {
            console.log(res)
            const { entities } = res
            const [user] = entities.users
            this.setUser(user)
            this.$refs.toast.show({ title: '登录成功', type: 'success', back: true })
          }).catch(e => {
            if (e && e.response && e.response.status === 422) {
              this.$refs.toast.show({ title: '用户不存在', type: 'error' })
            }
            if (e && e.response && e.response.status === 401) {
              this.$refs.toast.show({ title: '密码错误', type: 'error' })
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .container {
    flex: 1;
    padding: 40rpx;
  }

  .btn {
    width: 100vw;
    height: 88rpx;
    background-image: $primary-gradient;
  }
}
</style>
