<script>
import Wechat from '@/models/Wechat'
import Banner from '@/models/Banner'
import Firm from '@/models/Firm'

export default {
  onLaunch () {
    uni.login().then(([_, res]) => {
      Wechat.login(res)
    })
    Banner.fetch()
    Firm.fetch()
  }
}
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
@import '@/assets/styles/common.scss';
</style>
