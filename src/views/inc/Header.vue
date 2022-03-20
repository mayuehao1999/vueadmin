<template>
<el-header>
        <strong>后台管理系统</strong>
        <div class="header-avatar"><el-avatar size="medium" :src="userInfo.avatar"></el-avatar>
        <el-dropdown>
        <span class="el-dropdown-link">
        {{userInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><router-link to="/userCenter">个人中心</router-link></el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>

        </el-dropdown-menu>
        
        </el-dropdown>
        </div>
</el-header>
</template>

<script>
export default {
 name:"Header",
 data(){
   return{
     userInfo:{
       id:"",
       username:"",
       avatar:""
     }
   }
 },
 created(){
  this.getUserInfo()
 },
 methods:{
   getUserInfo(){
     this.$axios.get("/sys/userInfo").then(res=>
     {
       this.userInfo=res.data.data
     })
   }
 }
}
</script>

<style scoped>
  .header-avatar{
      float: right;
      width: 210px;
      display: flex;
      justify-content: space-around;
      align-items: center;
  }
   .el-header, .el-footer {
    background-color: #2c73cf;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .header-avatar{
      float: right;
      width: 210px;
      display: flex;
      justify-content: space-around;
      align-items: center;
  }
  
</style>