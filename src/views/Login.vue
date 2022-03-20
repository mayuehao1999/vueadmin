<template>
  <el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6"><h2>欢迎来到管理系统</h2></el-col>
  <el-col :span="1"> <el-divider direction="vertical"></el-divider></el-col>
  <el-col :span="6"><el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号" prop="username" style="width:380px">
    <el-input v-model="loginForm.username"  ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password" style="width:380px">
    <el-input v-model="loginForm.password"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="code" style="width:380px">
    <el-input v-model="loginForm.code" style="width:172px;float:left;"></el-input>
    <el-image :src="image" class="image"></el-image>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('loginForm')">立即创建</el-button>
    <el-button @click="resetForm('loginForm')">重置</el-button>
  </el-form-item>
</el-form></el-col>
</el-row>
</template>

<script>
export default {
    name:"Login",
      data() {
      return {
        loginForm: {
          username: '',
          password: '',
          code: '',
          token:'',
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            
          ],
           password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
        
          ],
           code: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { min: 5, max: 5, message: '长度是5 个字符', trigger: 'blur' }
          ],
        },
        image:null
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('/login',this.loginForm).then(res =>{
         const jwt=res.headers['authorization']
         this.$store.commit('SET_TOKEN',jwt)
         this.$router.push("/index")
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getImage(){
        this.$axios.get('/image').then(res =>{
             this.loginForm.token=res.data.data.token
             this.image=res.data.data.image
            })
    }
    },
    created(){
        this.getImage()
    }
}
</script>

<style>
 .el-divider{
 height: 200px;
}
 .el-row{
    background-color: #fafafa;
    height: 920px;
    display: flex;
    align-items: center;
    text-align: center;
}
.image{
    float: left;
    margin-left: 8px;
    border-radius: 4px;
}
</style>