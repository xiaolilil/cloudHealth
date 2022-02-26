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
            <li >
                <i class="iconfont icon-logo-wechat"></i>
                <i class="iconfont icon-QQ-circle-fill"></i>
                <i class="iconfont icon-logo-weibo"></i>
                <i class="iconfont icon-zhifubao"></i>
            </li>
        </ul>
        <p>更改</p>
    </div>
 </div>
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
    const edit = (v) => {
        console.log(v)
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
        .iconfont{
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
        }
        ul{
            flex: 1;
            li{
                &:first-child{
                    font-weight: bold;
                }
                &:last-child{
                    width: 70%;
                    color: rgb(99, 98, 98);
                }
                i{
                    font-style: normal;
                    width: 30px;
                    height: 30px;
                    color: #ccc;
                    font-size: 30px;
                }
                // .iconfont{
                    
                // }
            }
        }
    }
}


</style>