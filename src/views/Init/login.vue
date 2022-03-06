
<template>
  <el-container  class="body" v-if="!isLogin">
    <el-main class="main">
      <el-row class="main-top">
        <el-col :span="5" class="logo">
          <img src="../../assets/logo.png" class="trademark">
        </el-col>
        <el-col :span="19" class="title"><h1>健康云</h1></el-col>
      </el-row>
      <el-form :model="user" :rules="rules" ref="formRef" label-width="60px" class="demo-ruleForm">
        <el-form-item label="电话" prop="phone">
          <el-input v-model="user.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" >
          <el-input v-model="user.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证" prop="verify" style="">
          <el-input v-model="user.verify" style="width: 25%;"> </el-input>
          <img src="../../assets/verifyImg.jpg" class="verify" alt=""  @click="handVerify">
          <el-button v-if="!isGetVerify" type="primary" @click="handVerify" style="width: 30%">看不清</el-button>
          <el-button v-else style="width: 30%" type="warning" disabled>{{time}} 秒</el-button>
        </el-form-item>
        <el-form-item  class="pwd">
          <el-checkbox  style="margin-right: 25px;color: whitesmoke">
            记住密码
          </el-checkbox>
          <div style="float:right;">
 
            <span class="a" @click="findPasswordBack">
              找回密码
            </span>
          </div>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="submitForm(formRef)" class="button">登录</el-button>
          <el-button type="info" @click="register" class="button">注册</el-button>
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
import { useStore } from "vuex";
import {_getVerify,_login} from '@/api/init.js'

    const store = useStore();

    const formRef = ref(null);
    const router = useRouter();
    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 
    const user = reactive({
        phone: "173",
        password: "12",
        verify:"q3aj",
    })
    const rules = {
        phone: [
          {required: true, message: '请输入电话', trigger: 'blur'},
          {min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 0, max: 18, message: '长度在 0 到 18 个字符', trigger: 'blur'}
        ],
        verify: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {min: 4, max: 4, message: '验证码有误', trigger: 'blur'}
        ]
      }
    const isLogin = ref(false);
    const time = ref(20);
    const isGetVerify = ref(false);
    // 获取验证码
    const getVerify = async () => {
      const res = await _getVerify();
      if(res.status != 200) proxy.$msg.error(res.message);
    }
    getVerify()
    // 手动获取验证码
    const handVerify = () => {
      if(!isGetVerify.value){
        isGetVerify.value = true;
        getVerify();
        let timer = setInterval(() => {
          time.value--
          if(time.value == 0){
            time.value = 20;
            isGetVerify.value = false;
            clearInterval(timer)
          }
        },1000)
      }
    }
    const submitForm = (formRef) => {
            formRef.validate( (valid) => {
                if (valid) {
                    // const { data: res } = await _login(user)
                    // if (res.status !== 200) ElMessage.error('账号或密码错误')
                    // console.log(res)
                    // window.sessionStorage.setItem("active", 'welcome');
                    // store.commit("user/setToken",res.data)

                    // const res = await store.dispatch("user/LoginResult", state.form);
                    // if (res.code == 200) {
                    //   // const toPath = decodeURIComponent(route.query?.redirect || "/"); //获取登录成功后要跳转的路由。
                    //   /* 获取用户信息 */
                    //   // let tokenResult = localStorage.getItem("token");
                    //   // console.log(tokenResult);
                    //   const result = await store.dispatch("user/GetInfo", tokenResult);
                    //   const { roles } = result.data;
                    //   const accessedRoutes = await store.dispatch("asyncRouter/generateRoutes", roles);
                    //   accessedRoutes.forEach((item) => {
                    //     router.addRoute(item);
                    //   });
                    // } else {
                    //   message.info("登录失败");
                    // }

                    proxy.$msg.info('登录中...')
                    isLogin.value = true;
                    store.commit("user/SET_ROLES",'client')

                    // store.dispacth('permission/GET_MENU', 'token')
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


<style lang="less" scoped>
  .logo{
    text-align: right;
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
    background:#badde9 ;
    border-radius: 20px;
    box-shadow: 0 0 10px #aaa;
  }
  .main-top{
    margin-bottom: 20px;
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
    width: 100px;
    height: 32px;
    margin: 0 15px;
    border-radius: 5px;
    // vertical-align: bottom;
  }
  .load{
    width: 100%;
    height: 100vh;
    background-color: rgb(144, 88, 197);
  }

</style>