<!--test.vue-->
<template>
  <div class="qk-image">
    <img :src="imageSrc" alt="">
  </div>
</template>

<script>
	export default {
		name: 'QkImage', // 这个名字很重要，它就是未来的标签名<qk-text></qk-text>
		props: {
			imageSrc: {
				type: String,
        default: 'https://cdn.h5ds.com/uploads/s/20200811/e38e467465d50f10b02891bd48527c35db1cb5bb.png'
      }
		}
	}
</script>

<style lang="scss" scoped>
  .qk-image{
    width: 100%;
    height: 100%;
  }
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
