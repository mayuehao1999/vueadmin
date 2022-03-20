<template>
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <router-link to="/Index">
       <el-menu-item index="1">
        <i class="el-icon-house"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title">
            <i class="el-icon-s-tools"></i>
          <span>系统管理</span>
        </template>
        <router-link to="/sys/Users">
          <el-menu-item index="2-1"><i class="el-icon-user-solid"></i><span>用户管理</span></el-menu-item></router-link>
          <router-link to="/sys/role">
         <el-menu-item index="2-2"><i class="el-icon-user"></i><span>角色管理</span></el-menu-item></router-link>
         <router-link to="/sys/Menu">
           <el-menu-item index="2-3"><i class="el-icon-menu"></i><span>菜单管理</span></el-menu-item></router-link>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
            <i class="el-icon-setting"></i>
          <span>系统工具</span>
        </template>
          <el-menu-item index="3-1"><i class="el-icon-message"></i><span>数字字典</span></el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
  name:"Sider"
}
</script>

<style scoped>
.el-menu{
    text-align: left;
}
.el-menu-vertical-demo{
    height: 100%;
}
.el-menu{
    text-align: left;
}
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
</style>