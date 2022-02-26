<template>
  <el-container  class="body">
    <el-header>
      <el-row>
        <el-col span="3">
          <img src="@/assets/img/logo.png" class="trademark">
        </el-col>
        <el-col span="20" style="text-align: right">
            <h1 style="color: whitesmoke;">欢迎使用健康云</h1>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm form">
        <el-form-item label="昵称" prop="nickName">
          <el-input v-model="customer.nickName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="customer.password"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="customer.phone"></el-input>
        </el-form-item>
        <el-form-item label="验证" prop="verify">
          <el-input v-model="customer.verify" style="width: 50%;margin-right: 10%"></el-input>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width: 40%">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "register",
  path:'/register',
  data() {
    return {
      customer: {
        nickName: '',
        password: '',
        phone: '',
        verify:''
      },
      rules: {
        nickName: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请设置密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        verify: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
  .logo{
    text-align: right;
    padding-top: 18px;
  }
  .trademark{
    width: 66px;
    height: 66px;
    border-radius: 33px;
    margin-left: 20px;
  }
  .body{
    background:#3d6756 ;
    background-size: 100% 100%;
    height: 100vh;
  }
  .main{
    min-width: 600px;
    margin:0 auto;
    background:#a7d4c3 ;
    border-radius: 15px;
  }
  .form{
    margin-right: 10%;
    margin-top:10%;
  }
  .el-header{
    width: 650px;
    margin:0 auto;
    text-align: justify;
  }
</style>