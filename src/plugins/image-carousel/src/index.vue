<!--test.vue-->
<template>
  <div class="qk-image-carsousel">
    <!--异步加载轮播图的情况;-->
    <Swiper class="image-carsousel-swiper" v-if="imageSrcList.length > 0"  :autoPlay='true' :showIndicator='true' :interval="interval" duration="500">
      <Slide class="image-carsousel-slide" v-for="(item,index) in imageSrcList" :key="index">
        <img  class="image-carsousel-image" :src="item" alt="">
      </Slide>
    </Swiper>
  </div>
</template>

<script>
	import { Swiper, Slide } from 'vue-swiper-component';
	export default {
		name: 'QkImageCarousel', // 这个名字很重要，它就是未来的标签名<qk-text></qk-text>
		components: {
			Swiper,
			Slide
		},
		props: {
			imageSrcList: {
				type: Array,
				default: () => {
					return [
						'https://cdn.h5ds.com/uploads/s/20200811/e38e467465d50f10b02891bd48527c35db1cb5bb.png',
						'https://cdn.h5ds.com/upload/afe8bd53-2cdd-47b0-b577-283fd278d55f.png',
						'https://cdn.h5ds.com/uploads/s/20200806/07ee529637d65351f6a00683667debb8cd3ad367.jpg'
					]
        }
			},
			interval: {
				type: Number,
				default: 2500
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.image-carsousel-swiper,
.image-carsousel-slide,
.image-carsousel-image{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
<style>
  .image-carsousel-swiper .wh_swiper{
    height: 100%;
  }
</style>
