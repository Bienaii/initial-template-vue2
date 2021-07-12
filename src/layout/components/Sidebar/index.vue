<template>
  <div class="sidebar-container">
    <el-menu 
      :collapse="isCollapse"
      default-active="1-4-1" 
      class="el-menu-vertical-demo" 
      @open="handleOpen" 
      @close="handleClose" 
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">子页面1</el-menu-item>
          <el-menu-item index="2-2">子页面2</el-menu-item>
          <el-menu-item index="2-3">子页面3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
    <img
      class="foldImg"
      :src="imgUrl"
      alt
      @click="toggleSidebar"
    />
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isCollapse: false, // 左侧栏是否展开显示
    }
  },
  computed: {
    imgUrl() {
      return this.isCollapse ? require('@/assets/unfoldIcon.png') : require('@/assets/foldIcon.png')
    }
  },
  methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 切换侧边栏显示/隐藏
    toggleSidebar() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar-container {
  // width: 210px;
  height: 100%;
  position: relative;
  .foldImg {
    position: absolute;
    cursor: pointer;
    right: -13px;
    top: 50%;
    z-index: 10;
  }
}
</style>
<style lang="scss">
$bgColor:#304156;
.sidebar-container {
  .el-menu {
    height: 100%;
    border-right: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
}

</style>
