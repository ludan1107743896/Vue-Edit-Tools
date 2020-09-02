<template>
    <el-row :gutter="0" class="header-title-box">
        <el-col :span="16">{{this.headerName}}</el-col>
        <el-col :span="8" style="text-align: right;">更多>></el-col>
    </el-row>
</template>

<script>
export default {
    mounted() {
        // console.log(this, '1211111111')
    },
    props: {
        headerName: {
            type: String,
            default: "",
        }
    }
}
</script>

<style lang="scss" scoped>
.header-title-box{
    height: 50px;
    line-height: 50px;
}
</style>