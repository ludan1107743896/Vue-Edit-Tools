<template>
    <div class="homepage-hero-module">
        <div class="login-container">
            <el-form
                ref="loginForm"
                :model="loginForm"
                :rules="loginRules"
                class="login-form"
                auto-complete="on"
                label-position="left"
            >
                <div class="title-container">
                    <h3 class="title">VUE-EDIT-TOOLS</h3>
                </div>
                <el-form-item prop="username">
                    <span class="svg-container svg-container_login">
                        <i slot="prefix" class="el-icon-user"></i>
                    </span>
                    <el-input
                        v-model="loginForm.username"
                        name="username"
                        type="text"
                        auto-complete="on"
                        placeholder="请输入姓名"
                    />
                </el-form-item>

                <el-form-item prop="password">
                    <span class="svg-container">
                        <i slot="prefix" class="el-icon-goods"></i>
                    </span>
                    <el-input
                        :type="passwordType"
                        v-model="loginForm.password"
                        name="password"
                        auto-complete="on"
                        placeholder="请输入密码"
                        @keyup.enter.native="handleLogin"
                    />
                    <span class="show-pwd" @click="showPwd">
                        <i class="el-icon-view"></i>
                    </span>
                </el-form-item>

                <el-button
                    :loading="loading"
                    type="primary"
                    style="width:100%;margin-bottom:30px;"
                    @click.native.prevent="handleLogin"
                >登录</el-button>
            </el-form>
        </div>
        <div class="video-container">
            <div :style="fixStyle" class="filter"></div>
            <video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay" muted>
                <source :src="PATH_TO_MP4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
            </video>
        </div>
    </div>
</template>

<script>
import mp4Path from '../../public/1.mp4'

export default {
    name: 'login',
    data() {
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error('管理员密码长度应大于6'))
            } else {
                callback()
            }
        }
        return {
            vedioCanPlay: false,
            fixStyle: '',
            PATH_TO_MP4: '',
            loginForm: {
                username: '',
                password: '',
            },
            loginRules: {
                username: [
                    {
                        required: true,
                        message: '账户不允许为空',
                        trigger: 'blur',
                    },
                ],
                password: [
                    {
                        required: true,
                        message: '密码不允许为空',
                        trigger: 'blur',
                    },
                    { validator: validatePassword, trigger: 'blur' },
                ],
            },
            passwordType: 'password',
            loading: false,
        }
    },
    watch: {
        $route: {
            handler: function (route) {
                this.redirect = route.query && route.query.redirect
            },
            immediate: true,
        },
    },
    created() {
        window.addEventListener('hashchange', this.afterQRScan)
        this.PATH_TO_MP4 = mp4Path
    },
    destroyed() {
        window.removeEventListener('hashchange', this.afterQRScan)
    },
    methods: {
        canplay() {
            this.vedioCanPlay = true
            console.log(this.vedioCanPlay)
        },
        showPwd() {
            if (this.passwordType === 'password') {
                this.passwordType = ''
            } else {
                this.passwordType = 'password'
            }
        },
        handleLogin() {
            this.$refs.loginForm.validate((valid) => {
                if (valid && !this.loading) {
					console.log(this.loginForm, '1111')
					const {username, password} = this.loginForm;
					if(username === 'ludan' && password === '123456'){
						this.$router.push('/') 
					} else {
						this.$message.error("请正确输入账号密码。")
					} 
                    // this.loading = true
                    // this.$axios
                    //     .post('/auth/register', this.loginForm)
                    //     .then((res) => {
					// 		this.loading = false;
                    //         this.$store.dispatch(
                    //             'updateUserToken',
                    //             res.body.token
                    //         )
                    //         this.$router.push('/')
                    //         this.getUserInfo()
					// 	})
					// 	.catch(response => {
                    //         this.$message.error({
                    //             title: '失败',
                    //             message: '请正确填下表单'
                    //         })
                    //         this.loading = false
                    //     })
                } else {
                    return false
                }
            })
        },
    },
    mounted: function () {
        window.onresize = () => {
            const windowWidth = document.body.clientWidth
            const windowHeight = document.body.clientHeight
            const windowAspectRatio = windowHeight / windowWidth
            let videoWidth
            let videoHeight
            if (windowAspectRatio < 0.5625) {
                videoWidth = windowWidth
                videoHeight = videoWidth * 0.5625
                this.fixStyle = {
                    height: windowWidth * 0.5625 + 'px',
                    width: windowWidth + 'px',
                    'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
                    'margin-left': 'initial',
                }
            } else {
                videoHeight = windowHeight
                videoWidth = videoHeight / 0.5625
                this.fixStyle = {
                    height: windowHeight + 'px',
                    width: windowHeight / 0.5625 + 'px',
                    'margin-left': (windowWidth - videoWidth) / 2 + 'px',
                    'margin-bottom': 'initial',
                }
            }
        }
        window.onresize()
    },
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;
            &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: #fff !important;
            }
        }
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 9999;

    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 520px;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
        z-index: 9999;
    }

    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;

        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;

        &_login {
            font-size: 20px;
        }
    }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;
            font-weight: 400;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
}

.homepage-hero-module,
.video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
}

.video-container .poster img,
.video-container video {
    z-index: 0;
    position: absolute;
}

.video-container .filter {
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
}
</style>
