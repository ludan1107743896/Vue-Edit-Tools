<template>
    <div>
        <el-row>
            <el-col :span="4.1" v-for="item in productList" :key="item.id" style="margin-bottom: 10px;">
                <div @click="handleclik(item)" class="template-item">
                    <div class="template-item-img">
                        <img :src="item.coverImageUrl" alt="" class="template-item-img-auto">
                    </div>
                    <div class="template-item-info">
                        <h1>{{item.name}}</h1>
                        <div class="template-item-detail">
                            <div>
                                <span class="template-item-span">
                                    <i class="el-icon-warning"></i> 27</span>
                                <span class="template-item-span">
                                    <i class="el-icon-warning"></i> 0</span>
                            </div>
                            <div>
                                <span class="template-item-price2"><em>积分</em>0</span>
                            </div>
                        </div>
                        <div class="template-item-owner">
                            <div class="template-item-photo">
                                <img src="https://cdn.h5ds.com/static/images/avatar_10.jpg" alt="">
                            </div>
                            <div>
                                <span class="template-item-name">童话</span>
                                <span class="template-item-date">1970/01/12 07:30:14</span>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    props: {
        productList: {
            type: Array,
        }
    },
    computed: {
        ...mapState({
            selectItem: state => {
                console.log(state, '-------state----')
                return state.homePage.item
            },
        })
    },
    methods: {
        handleclik(item) {
            this.$store.dispatch('updateCount', item);
            this.$router.push({ name: 'pageEditor' });
        }
    }
}
</script>
<style lang="scss" scoped>
.product-item-box{
    border: 1px solid #ddd;
    height: 250px;
    width: 174px;
    border-radius: 10px;
    line-height: 250px;
    text-align: center;
    font-size: 24px;
    margin: 0 auto;
}
.product-content{
    width: 174px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0 auto;
    line-height: 32px;
}
.template-item {
    cursor: pointer;
    margin: 0 5px;
    display: inline-block;
    width: 230px;
    vertical-align: top;
    margin-bottom: 30px;
    background-color: #fff;
    font-size: 12px;
    overflow: hidden;
    border-radius: 5px;
    transition: .3s;
}
.template-item-img {
    width: 240px;
    height: 385.5px;
    background-color: #ccc;
    position: relative;
    overflow: hidden;
}
.template-item-img-auto{
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 100;
}
.template-item-info {
    margin: 10px;
    h1{
        font-size: 16px;
        width: 100%;
        height: 45px;
        padding: 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        font-weight: 500;
    }
}
.template-item-detail{
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    align-items: center;
}
.template-item-owner{
    display: flex;
    align-items: center;
}
.template-item-span{
    margin-right: 10px;
}
.webfont{
    font-family: webfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
}
.template-item-photo{
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-color: #f5f5f5;
    margin-right: 10px;
    overflow: hidden;
}
.template-item-name{
    display: block;
}
.template-item-date{
    box-sizing: border-box;
}
</style>