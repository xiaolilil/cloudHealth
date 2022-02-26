<template>
 <div class="box">
     <div class="box-left">
         <img src="https://img2.baidu.com/it/u=2945453006,1814818261&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360" alt="">
         <h3>编辑头像</h3>
     </div>
     <div class="box-right">
         <ul>
             <li><strong>用户名:</strong> {{editForm.username}}</li>
             <li><strong>账号:</strong> {{editForm.account}}</li>
             <li><strong>手机:</strong> {{editForm.mobile}}</li>
             <li><strong>邮箱:</strong> {{editForm.email}}</li>
             <li><strong>年龄:</strong> {{editForm.age}}</li>
             <li><strong>籍贯:</strong> {{editForm.native}}</li>

         </ul>
         <el-button class="btn" type="primary" @click="showEditBox">编辑资料</el-button>
     </div>
 </div>

    <!-- 编辑用户 -->
    <el-dialog
        v-model="editBox"
        title="编辑用户"
        width="40%"
    >
        <el-form ref="editformRef" :model="editForm" :rules="rules" label-width="120px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="editForm.username" clearable></el-input>
            </el-form-item>
            <el-form-item label="账号" prop="account">
                <el-input v-model="editForm.account" clearable></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="mobile">
                <el-input v-model="editForm.mobile" clearable></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="editForm.email" clearable></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model="editForm.age" clearable></el-input>
            </el-form-item>
            <el-form-item label="籍贯" prop="native">
                <el-input v-model="editForm.native" clearable></el-input>
            </el-form-item>
            <el-form-item>
            <el-button @click="editBox = false">取消</el-button>
            <el-button type="primary" @click="editInfo(editformRef)">确定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>



</template>

<script setup>
import {ref,reactive} from 'vue';
import { getCurrentInstance } from 'vue'


    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 
    const editBox = ref(false);
    const editForm = reactive({
        username:'木子',
        account: 'admin',
        mobile:13256632876,
        email:'12345@qq.com',
        age:22,
        native:'四川'
    })
    const showEditBox = () => {
        editBox.value = true;
    }
    const editInfo = () => {
        editBox.value = false;
        proxy.$msg.success('修改成功')
    }

</script>

<style lang="less" scoped>
@import "../../style/mixins.less";


.box{
    .wh(70%, auto);
    border: 3px solid blueviolet;
    margin: auto;
    display: flex;
    padding: 10px 20px ;
    .box-left{
        margin-right: 100px;
        img{
            .wh(100px,100px);
            border-radius: 50%;
        }
        h3{
            text-align: center;
        }
    }
    .box-right{
        flex: 1;
        ul{
            padding-top: 10px;
            .fj();
            flex-wrap: wrap;
            li{
                width: 50%;
                margin-bottom: 20px;
            }
        }
        .btn{
            margin-top: 50px;
            position: relative;
            left: 30%;
            // transform: translateX(-50%);
            text-align: center;
        }
    }
}
</style>