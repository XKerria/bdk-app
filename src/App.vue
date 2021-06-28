<script>
export default {
  onLaunch () {
    uni.login().then(([_, res]) => {
    })
  }
}
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
@import '@/assets/styles/common.scss';
</style>
