<template>
  <div  class="body">
    <header>
      <img src="../../assets/logo.png" class="trademark">
      <h1 style="color: whitesmoke;">欢迎使用健康云</h1>
    </header>

    <el-main class="main">
      <el-form :model="registerForm" :rules="rules" ref="registerRef" label-width="100px" class="demo-ruleForm form">
        <el-form-item label="姓名" prop="nickName">
          <el-input v-model="registerForm.nickName" placeholder="请输入姓名" clearable></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="registerForm.age" placeholder="请输入年龄" clearable></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="registerForm.gender">
            <el-radio label="男" :value="registerForm.gender">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="registerForm.phone" placeholder="请输入电话" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="registerForm.password" type="password" show-password placeholder="请输入密码" clearable></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-cascader
          v-model="registerForm.address"
          :options="addressData"
          :props="exprops"
          @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="验证" prop="verify">
          <el-input v-model="registerForm.verify" style="width: 20%;margin-right: 5%" clearable></el-input>
          <img class="verImg" src="http://localhost:3030/public/verify" alt="" @click="handVerify">
          <el-button v-if="!isGetVerify" type="primary" @click="handVerify" style="width: 30%">获取验证码</el-button>
          <el-button v-else style="width: 30%" type="warning" disabled>{{time}} 秒</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register(registerRef)" style="width: 100%">立即注册</el-button>
        </el-form-item>
      </el-form>
      <p class="toLogin" @click="router.push('/login')">已有账号, 去登录 ></p>
    </el-main>
  </div>
</template>

<script setup> 
import { useRouter } from "vue-router";
import { reactive ,ref } from 'vue'
import { getCurrentInstance } from 'vue'
import cityData from "./citydata.js";
import {_getVerify} from '@/api/init.js';

  // name: "register"
  const addressData = cityData; // 省市区地址
  const router = useRouter(); // 路由
  const { proxy } = getCurrentInstance(); // ctx中有问题，建议使用proxy中获取 
  const registerRef = ref(null);
  const exprops = {
    expandTrigger: 'trigger',
  }
  const isGetVerify = ref(false); // 是否在获取权限中
  const time = ref(20); // 倒计时时间 初始值
  // 注册表单信息
  const registerForm = reactive({
        nickName: '',
        age: '',
        gender: '男',
        phone: '',
        password:'',
        address:'',
        verify:''
  })
  // 表单校验规则
  const rules = {
        nickName: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 1 到 2 个字符', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请输入性别', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 1 到 2 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请设置密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
        ],
        verify: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur' }
        ],
  }
  // 切换省市区时的回调函数 显示点击的value
  const handleChange = (val) => {
    console.log(val)
  }
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
  // 注册
  const register = (registerRef) => {
      registerRef.validate(async (valid) => {
          if (valid) {
            console.log(registerForm)
            router.push('/login')
          }else{
            return false
          }
      })
  }

</script>

<style lang="less" scoped>

  .body{
    // background:url('https://img0.baidu.com/it/u=2396947543,1556034533&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=439');
    background-color: rgb(47, 55, 156);
    height: 100vh;
    padding-top: 5%;
    box-sizing: border-box;
  }

  header{
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 20px;
  }
  .logo{
    text-align: right;
    padding-top: 18px;
  }
  .trademark{
    width: 66px;
    height: 66px;
    border-radius: 33px;
  }

  .main{
    min-width: 600px;
    width: 600px;
    margin:0 auto;

    // background:rgb(110, 90, 130, .2) ;
    background-color: rgb(85, 57, 110);
    border-radius: 15px;
  }
  .form{
    margin-right: 10%;
    margin-top:10%;
  }
:deep(.el-cascader .el-input .el-input__inner){
  width: 404px;
}
.verImg{
  width: 161px;
  height: 32px;
  margin-right: 20px;
}
.toLogin{
  text-align: right;
  color: #fff;
  cursor: pointer;
  &:hover{
    color: rgb(236, 187, 187);
  }
}
</style>