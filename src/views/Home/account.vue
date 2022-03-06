<template>
 <div class="box">
     <p class="box-top">
        <strong>账号设置</strong>
        <el-alert class="iconfont icon-gantanhao" title="你当前的账户安全系数较低,请补充邮箱!" type="warning" :closable="false"/>
     </p>
    <hr>
    <div class="set mobile">
        <span class="iconfont icon-duihao"></span>
        <ul>
            <li>手机号码</li>
            <li>{{account.mobile}}</li>
        </ul>
        <p @click="edit('mobile')">更改</p>
    </div>
    <div class="set email">
        <span class="iconfont icon-gantanhao"></span>
        <ul>
            <li>邮箱</li>
            <li>{{account.email}}</li>
        </ul>
        <p @click="edit('email')">更改</p>
    </div>
    <div class="set password">
        <span class="iconfont icon-duihao"></span>
        <ul>
            <li>账户密码</li>
            <li>{{account.password}}</li>
        </ul>
        <p @click="edit('password')">更改</p>
    </div>
    <div class="set lj">
        <span class="iconfont "></span>
        <ul>
            <li>绑定第三方账号</li>
            <li class="other" @click="dialog">
                <i class="iconfont icon-logo-wechat"></i>
                <i class="iconfont icon-QQ-circle-fill"></i>
                <i class="iconfont icon-logo-weibo"></i>
                <i class="iconfont icon-zhifubao"></i>
            </li>
        </ul>
    </div>
 </div>

    <!-- 修改手机号 -->
    <el-dialog
        v-model="editBox"
        title="身份验证"
        width="40%"
    >
        <p class="title">为了您的账户安全,请验证身份。验证成功后进行下一步操作。</p>
        <el-form ref="editformRef" :model="editForm" :rules="rules" label-width="120px">
            <el-form-item >
                <el-select  placeholder="使用 132****3568 验证">
                    <el-option label="Zone one" value="test">使用 132****3568 验证</el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="verfication">
                <input class="ipt" v-model="editForm.verfication" placeholder="6位验证码" />
                 <el-button class="btn" v-if="flag == '获取验证码'" @click="getNum">{{flag }}</el-button>
                 <el-tag v-else>{{flag}}秒</el-tag>
            </el-form-item>
            <el-form-item prop="mobile">
                <input class="ipt ipt2" v-model="editForm.mobile" placeholder="请输入手机号" />
            </el-form-item>
            <div class="elbd">
                <el-button @click="editBox = false">取消</el-button>
                <el-button type="primary" @click="toValidate(editformRef)">确定</el-button>
            </div>
        </el-form>
    </el-dialog>





</template>

<script setup>
import {ref,reactive} from 'vue'
import { getCurrentInstance } from 'vue'


    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 
    const account = {
        mobile:'132****3566',
        email:'123@qq.com',
        password:'******',

    }
    const flag = ref('获取验证码');
    const editBox = ref(false);
    const editformRef = ref(null)
    const editForm = {
        verfication:'',
        mobile:'',
    }
    const rules = {
        verfication :[{ required: true, message: '请输入验证码',trigger: 'blur'}],
        mobile :[{ required: true, message: '请输入手机号',trigger: 'blur'}],
    }
    const edit = (v) => {
        if(v == 'mobile')editBox.value = true;
    }
    
    const getNum = () => {
        console.log(flag.value)
        if(flag.value == '获取验证码'){
            flag.value = 20;
            setTimeout(() => {
                proxy.$msg.success('验证码: 376298')
            },3000)
            let a = setInterval(() => {
                flag.value --
                if(flag.value == 0){ 
                    flag.value = '获取验证码'
                    clearInterval(a);
                }
            },1000)
        }

    }
    const toValidate = (editformRef) => {
        editformRef.validate(  (valid) => {
            if(editForm.mobile.length != 0 && editForm.verfication.length != 0){
                proxy.$msg.success('验证成功');
                account.mobile = editForm.mobile;
                editBox.value = false;
            }
        })
    }

    const dialog = () => {
        proxy.$msg.info('暂不支持')
    }




</script>

<style lang="less" scoped>
@import "../../style/mixins.less";

.box{
    .box-top{
        display: flex;
        align-items: center;
    }
    .el-alert{
        width: 40%;
        display: inline-block;
        margin-left: 20px;
        display: flex;
    }
    hr{
        margin: 20px 0;
    }
    .set{
        .wh(50%,100px);
        border: 1px solid #ccc;
        margin-bottom: 20px;
        .fj();
        padding: 0 30px ;
        span{
            width: 30px;
            height: 30px;
            font-size: 30px;
            margin-right: 100px;
        }
        .icon-duihao{
            color: rgb(18, 170, 18);
        }
        .icon-gantanhao{
            color: rgb(199, 199, 5);
        }
        p{
            width: 50px;
            cursor: pointer;
            &:hover{
                color: blueviolet;
                font-weight: bold;
            }
        }
        ul{
            flex: 1;
            li{
                &:first-child{
                    font-weight: bold;
                }
                &:last-child{
                    width: 50%;
                    color: rgb(99, 98, 98);
                }
                i{
                    font-style: normal;
                    color: #ccc;
                    font-size: 30px;
                    margin-right: 20px;
                    color: blueviolet;
                    cursor: pointer;
                }

            }
            .other{
                padding-top: 10px;
            }
        }
    }
}
.title{
    margin-bottom: 10px;
    padding-left: 9%;
}
.ipt{
    width: 90px;
    height: 28px;
    outline: none;
    padding-left: 5px;
    margin-right: 19px;
    border: 1px solid rgb(204, 193, 193);
    border-radius: 3px;
}
.ipt2{
    width: 210px;
}
.el-tag{
    .wh(102px, 32px);
}
.btn{
    width: 102px;
}
.elbd{
    text-align: right;
}
</style>