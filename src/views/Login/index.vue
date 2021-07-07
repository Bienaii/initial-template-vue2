<template>
  <div class="login-container">
    <div class="login-form-content">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

        <div class="form-title-container">
          <h3 class="form-title">系统登录</h3>
        </div>

        <el-form-item prop="username">
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="用户名"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
          >
            <img slot="prefix" src="@/assets/login/login_user.png" alt="用户名">
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            ref="password"
            v-model="loginForm.password"
            placeholder="密 码"
            name="password"
            type="text"
            tabindex="1"
            autocomplete="on"
          >
            <img slot="prefix" src="@/assets/login/login_password.png" alt="密码">
          </el-input>
        </el-form-item>
        <el-form-item prop="validation">
          <el-input
            ref="validation"
            v-model="loginForm.validation"
            placeholder="验证码"
            name="validation"
            type="text"
            tabindex="1"
            autocomplete="on"
          >
            <img slot="prefix" src="@/assets/login/login_yzm.png" alt="验证码">
          </el-input>
        </el-form-item>

        <el-button :loading="loading" type="primary" class="login-button" @click.native.prevent="handleLogin">登 录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        validation: '',
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }],
        validation: [{ required: true, trigger: 'blur', message: '请输入验证码' }],
      },
      loading: false,
      redirect: undefined,

    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$router.push('/')
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
.login-container {
  background-image: url('../../assets/login/login_background.png');
  background-repeat: no-repeat;
  height: 100%;
  .login-form-content {
    width: 440px;
    // height: 538px;
    background: linear-gradient(180deg, #266197, #0F2F67);
    border-radius: 4px;
    margin: 0 auto;
    padding: 60px 40px;
    position: relative;
    top: 200px;
  }
  .form-title {
    text-align: center;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #60E3F5;
    background: linear-gradient(0deg, #DFEDFF 0%, #9AB5DA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .login-button {
    width:100%;
    margin-bottom:30px;
    margin-top: 20px;
  }
}
</style>
<style lang="scss">
.login-container {
  .el-form-item {
    margin-bottom: 40px;
  }
  .el-input__inner {
    background: none;
    color: #fff;
    border: none;
    border-bottom: 1px solid #365E95;
  }
  .el-input__prefix {
    top: 3px;
  }
}
</style>
