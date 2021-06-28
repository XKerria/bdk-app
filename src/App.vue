<script>
import Wechat from '@/models/Wechat'
export default {
  onLaunch () {
    uni.login().then(([_, res]) => {
      Wechat.login(res)
    })
  }
}
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
@import '@/assets/styles/common.scss';
</style>
