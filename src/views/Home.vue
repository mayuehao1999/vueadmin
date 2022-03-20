<template>
  <el-container>
  <el-header>
   <Header></Header>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <Sider></Sider>
    </el-aside>
    <el-container>
        <el-main>
            <router-view></router-view>
        </el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
import Sider from './inc/Sider.vue'
import Header from './inc/Header.vue'
import Footer from './inc/Footer.vue'
export default {
  components: { Sider,Header, Footer },
    name:"Home"
}

</script>

<style>

.el-menu-vertical-demo{
    height: 100%;
}
.el-container{
    padding: 0px;
    margin: 0px;
    border: 0px;
    height: 860px;
}
 .el-header, .el-footer {
    background-color: #2c73cf;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>