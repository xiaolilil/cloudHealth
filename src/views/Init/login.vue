
<template>
  <el-container  class="body" v-if="!isLogin">
    <el-main class="main">
      <el-row>
        <el-col :span="5" class="logo">
          <img src="../../assets/logo.png" class="trademark">
        </el-col>
        <el-col :span="19" class="title"><h1>健康云</h1></el-col>
      </el-row>
      <el-form :model="user" :rules="rules" ref="formRef" label-width="60px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model="user.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" >
          <el-input v-model="user.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证" prop="verify" style="">
          <el-input v-model="user.verify" style="width: 33%;"> </el-input>
          <img src="../../assets/verifyImg.jpg" class="verify" alt="验证码异常">
          <span class="a" style="margin-left: 10px;font-size: 12px">
            看不清
          </span>
        </el-form-item>
        <el-form-item  class="pwd">
          <el-checkbox  style="margin-right: 25px;color: whitesmoke">
            记住密码
          </el-checkbox>
          <div style="float:right;">
            <span class="a" @click="register">
              注册
            </span>
            <span class="a" @click="findPasswordBack">
              找回密码
            </span>
          </div>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="submitForm(formRef)" class="button">
            登录
          </el-button>
          <el-button @click="resetForm(formRef)" class="button">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>

   <div class="load" v-else>
    <bv-loading>Loading...</bv-loading>
  </div>
</template>


<script setup>
// import axios from "axios";
// import qs from 'querystring'
import { useRouter } from "vue-router";
import { reactive ,ref } from 'vue'
import { getCurrentInstance } from 'vue'


    const formRef = ref(null);
    const router = useRouter();
    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 
    const user = reactive({
        account: "173",
        password: "12",
        verify:"q3aj",
    })
    const rules = {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {min: 0, max: 18, message: '长度在 0 到 18 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 0, max: 18, message: '长度在 0 到 18 个字符', trigger: 'blur'}
        ],
        verify: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {min: 4, max: 4, message: '验证码有明显错误', trigger: 'blur'}
        ]
      }
    const isLogin = ref(false);
    const submitForm = (formRef) => {
            formRef.validate(async (valid) => {
                if (valid) {
                    console.log(user)
                    // const { data: res } = await _login(form)
                    // if (res.meta.status !== 200) ElMessage.error('账号或密码错误')
                    // window.sessionStorage.setItem("active", 'welcome');
                    // store.commit("user/setToken",res.data)
                    proxy.$msg.success('登录中...')
                    isLogin.value = true;
                    setTimeout(() => {
                      router.push('/home')
                      proxy.$msg.success('登录成功')
                    },2000)
                    
                } else {
                    return false
                }
            })
    }

    const resetForm = (formRef) => {
        formRef.resetFields()
    }

    const register = () => {
        router.push('/register')
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
    border-radius: 20px;

  }
  .body{
    overflow-y: hidden;
    margin: 0;
    /*background: url("../../assets/img/login_bg.jpg");*/
    background: #509a80;
    background-size: 100% 100%;
    padding-top: 8%;
    height: 100vh;

  }

  .main{
    max-width: 460px;
    height: 480px;
    margin: 0 auto;
    /*border: white solid 1px;*/
    /*background: rgba(100,150,200,0.7);*/
    background:#badde9 ;
    border-radius: 20px;
    /*opacity: 0.1;*/
    box-shadow: 0 0 10px #aaa;
  }

  .el-form{
    margin: 0vh auto 0;
    width: 350px;
    height: 250px;
  }

  .pwd{
    width: 350px;
    display: flex;
    justify-content: space-between;
    /*text-align: left;*/
  }

  .button{
      margin: 0 40px;
  }

  span{
    color: whitesmoke;
    margin: 0 25px;
  }

  .a:hover{
    color: dodgerblue;
    cursor: pointer;

  }

  .title{
    font-family: 华文行楷;
    font-size: 24px;
    color: white;
    text-align: center;
    padding-left: 150px;
  }
  .verify{
    width: 120px;
    height: 40px;
    margin-left: 10px;
    border-radius: 5px;
    vertical-align: bottom;
  }
  .load{
    width: 100%;
    height: 100vh;
    background-color: rgb(144, 88, 197);
  }

</style>