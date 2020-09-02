<template>
  <div class="components-page-header">
    <el-row :gutter="0">
      <el-col :span="3">
        <span>VUE-EDIT-TOOLS</span>
      </el-col>
      <div class="pull-right">
        <userHeaderBar class="marginL30"/>
      </div>
    </el-row>
  </div>
</template>

<script>
	import userHeaderBar from './user-header-bar'
	import { mapState } from "vuex";
	export default {
		name: "page-header",
		components: {
			userHeaderBar
		},
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				userData: state => state.user.userData,
				token: state => state.user.token,
			})
		},
		methods: {
			logoutFn() {
				this.$router.push({name: 'Login'})
			},
			goLogin(){
				this.$mUtils.Cookie.set('beforeLoginUrl',encodeURIComponent(this.$route.fullPath), 1/24/60, window.location.host, window.location.pathname.substring(0, window.location.pathname.length-1)) // 保存用户进入的url
				this.$router.push({name: 'Login'})
      }
    },
	}
</script>

<style lang="scss" scoped>
  .components-page-header {
    height: 60px;
    line-height: 60px;
    padding-left: 12px;
    padding-right: 12px;
    background:#001529;
    color: #fff;
    box-shadow: 0px 1px 4px 0px rgba(195, 195, 195, 0.6);
  }
  .el-menu-demo{
      background: #001529;
      .el-menu-item{
        color: #fff;
      }
      .el-menu-item:hover{
       background: #001529;
      }
      .el-menu-item:active{
        color: #f90;
      }
  }

  .logo-wrapper {
    font-size: 18px;
    font-family: Yuanti SC;
    color: rgba(0, 0, 0, 1);
    line-height: 44px;
    display: inline-block;
    img {
      position: relative;
      top: 6px;
      width: 26px;
      height: 28px;
      display: inline-block;
      margin-right: 8px;
    }
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
  }
</style>
