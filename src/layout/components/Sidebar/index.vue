<template>
  <div class="sidebar-container">
    <el-menu 
      :collapse="isCollapse"
      default-active="1" 
      class="el-menu-vertical-demo" 
      @open="handleOpen" 
      @close="handleClose" 
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="(item, index) in allMenus" >
        <template v-if="!item.subMenus.length"> 
          <el-menu-item :index="item.menuId" :key="item.munuId" @click="addTab(item)">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.menuName}}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu :index="item.menuId" :key="item.munuId">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>{{item.menuName}}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.subMenus" :key="subItem.munuId">
              <el-menu-item :index="subItem.menuId" @click="addTab(subItem)">{{subItem.menuName}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </template>
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
      allMenus: [  // 左侧栏菜单，后面用接口数据替换
        {
          menuName: '首页',
          menuId: '100000',
          menuPath: 'dashboard',
          subMenus: [],
        },{
          menuName: '菜单一',
          menuId: '100010',
          menuPath: 'menu-1',
          subMenus: [
            {
              menuName: '子菜单一',
              menuId: '100011',
              menuPath: 'menu-1-1',
            },{
              menuName: '子菜单二',
              menuId: '100012',
              menuPath: 'menu-1-2',
            },{
              menuName: '子菜单三',
              menuId: '100013',
              menuPath: 'menu-1-3',
            }
          ],
        },{
          menuName: '菜单二',
          menuId: '100020',
          menuPath: 'menu-2',
          subMenus: [],
        },{
          menuName: '菜单三',
          menuId: '100030',
          menuPath: 'menu-3',
          subMenus: [],
        },
      ]
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
    },
    // 点击菜单跳转对应路由
    addTab(data) {
      console.log(data,'routes');
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
