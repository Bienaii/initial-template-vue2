<template>
  <div class="navbar-container">
    <div class="userinfo-container">
      <span class="userinfo-name">administrator</span>
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <!-- <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link> -->
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  },
  methods: {
    logout() {

    }
  }
}
</script>

<style scoped lang="scss">
.navbar-container {
  height: 84px;
  background: #123d5b;
  .userinfo-container {
    line-height: 84px;
    display: flex;
    justify-content: flex-end;
  }
  .userinfo-name {
    color: #afafaf;
    font-size: 24px;
  }
  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;

    &.hover-effect {
      cursor: pointer;
      transition: background .3s;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  }
  .avatar-container {
    margin-right: 30px;

    .avatar-wrapper {
      // margin-top: 5px;
      position: relative;
      top: 15px;

      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }

      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
<style scoped lang="scss">
  // .el-dropdown-menu.el-popper {
  //   top: 64px;
  // }
</style>
