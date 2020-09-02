<template>
    <div class="content-box">
        <nav-box />
        <div class="banner-box">
            <Swiper
                ref="swiper"
                @transtionend="getNum"
                v-if="list.length>0"
                interval="3000"
                duration="500"
            >
                <Slide v-for="(item,index) in list" :key="index">
                    <img :src="item.img" class="banner-img" />
                </Slide>
            </Swiper>
            <div class="options-btn">
                <span class="button1" @click="prevSlideClick">上一张</span>
                <span class="button2" @click="nextSlideClick">下一张</span>
            </div>
        </div>
        <title-header :headerName="'为您推荐'"/>
        <page-list :productList="productList" />
        <footer-comp />
    </div>
</template>
<script>
import titleHeader from './titleHeader'
import navBox from './navBox'
import { Swiper, Slide } from 'vue-swiper-component'
import PageList from './pageList';
import FooterComp from './footerComp';
export default {
    data() {
        return {
            list: [
                {
                    img:
                        'https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360',
                },
                {
                    img:
                        'https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360',
                },
                {
                    img:
                        'https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360',
                },
            ],
            productList: []
        }
    },
    mounted() {
        this.$axios.get('https://www.h5ds.com/api/v1/open/templates?page=1&page_size=20&keyword=&categoryId=&price_type=&order_column=id').then(res => {
            this.productList = res.data.data;
            console.log( res.data.data, '11')
        })
    },
    methods: {
        getNum(i) {
            // console.log(i, 'iiii')
        },
        prevSlideClick() {
            this.$refs.swiper.prevSlide()
        },
        nextSlideClick() {
            this.$refs.swiper.nextSlide()
        },
        slideToClick() {
            this.$refs.swiper.slideTo(2)
        },
    },
    components: {
        navBox,
        titleHeader,
        Swiper,
        Slide,
        PageList,
        FooterComp
    },
}
</script>

<style lang="scss" scoped>
.banner-box{
    position: relative;
}
.options-btn{
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    margin-top: 130px;
}
.button1{
    float: left;
    margin-left: -47px;
}
.button2{
    float: right;
    margin-right: -47px;
}
.banner-img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
}
.content-box {
    width: 1200px;
    margin: 0 auto;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>