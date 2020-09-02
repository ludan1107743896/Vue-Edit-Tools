<template>
    <el-row class="nav-header">
        <el-col :span="6" class="logo">这是一个 LOGO</el-col>
        <el-col :span="6">
            <el-input placeholder="请输入内容" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-col>
        <el-col :span="12">
            <el-row :gutter="20">
                <el-col :span="4" class="menu">模板</el-col>
                <el-col :span="4" class="menu">作品</el-col>
                <el-col :span="4" class="menu">数据</el-col>
                <el-col :span="4" class="menu">消息</el-col>
                <el-col :span="5">
                    <el-dropdown class="components-user-header cursor-pointer" trigger="click">
                        <span class="el-dropdown-link">
                            <span class="user-header-image iconfont">
                                <img src="../../common/images/head.png" />
                            </span>
                                ludan
                            <i
                                class="el-icon-arrow-down el-icon--right"
                            ></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <div>
                                    <span>
                                        <i class="iconfont icon-tuichuyingyong"></i>&nbsp;退出登录
                                    </span>
                                </div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.nav-header {
    height: 80px;
    background-color: rgba(85, 85, 85, 1);
    color: #fff;
    line-height: 80px;
    .logo {
        text-align: center;
        font-size: 16px;
    }
    .menu {
        text-align: center;
    }
    .el-dropdown-link{
        color: white;
    }
    .user-header-image {
        display: inline-block;
        vertical-align: middle;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 4px;
        font-size: 32px;
        line-height: 32px;
        text-align: center;
        margin-top: -5px;
        border: 1px solid $gray;
    }
}

</style>